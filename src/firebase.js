import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // updated import statement
import 'firebase/compat/firestore'; // updated import statement
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyABBLFwliv-V5Phzutc9nprgFA2BVNxjXg",
  authDomain: "bmi-app-6c118.firebaseapp.com",
  projectId: "bmi-app-6c118",
  storageBucket: "bmi-app-6c118.appspot.com",
  messagingSenderId: "536932917138",
  appId: "1:536932917138:web:e8fead0f2829a83afceb4b",
  measurementId: "G-Z6MTH54DQD"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
