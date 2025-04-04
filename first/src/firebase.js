// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwhjNsYOjwds_sKa_tdOddDveThTz6Lrs",
  authDomain: "firstproject-fb36b.firebaseapp.com",
  projectId: "firstproject-fb36b",
  storageBucket: "firstproject-fb36b.firebasestorage.app",
  messagingSenderId: "862920409943",
  appId: "1:862920409943:web:2996471bdc5facb752f412",
  measurementId: "G-JBWHHSK3J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };