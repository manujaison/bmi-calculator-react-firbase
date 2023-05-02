import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BmiCalculator from './components/BmiCalculator';
import PrivateRoute from './components/PrivateRoute';

/*function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <PrivateRoute exact path="/" element={<BmiCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}*/


function App() {
  console.log('rendering App component');
  return (
    <div>
      <LoginPage />
      <BmiCalculator />
    </div>
  );
}

export default App;
