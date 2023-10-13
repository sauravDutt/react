// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Code from line 8 to 10 are firebase analytics tool set 
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);
// console.log(analytics);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7VT4A3YOi8qBsWKlIrDMT98YiYoepq3Q",
  authDomain: "gtown-journal.firebaseapp.com",
  projectId: "gtown-journal",
  storageBucket: "gtown-journal.appspot.com",
  messagingSenderId: "738237664082",
  appId: "1:738237664082:web:30637bdda34eb7495f488b",
  measurementId: "G-9QN1QBLE83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

