import React, { useState } from 'react';

function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleWeightChange = (event) => setWeight(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bmiValue = weight / (height / 100) ** 2;
    setBmi(bmiValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <button type="submit">Calculate BMI</button>
      {bmi !== null
  && (
    <div>
      Your BMI is: {bmi.toFixed(2)}
    </div>
  )}
</form>
);
}

export default BmiCalculator;