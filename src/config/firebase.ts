// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQhLGJ5Hk1M1omF0C3tHeLxlYF43grwtY",
  authDomain: "react-socialmedia-app-3ab09.firebaseapp.com",
  projectId: "react-socialmedia-app-3ab09",
  storageBucket: "react-socialmedia-app-3ab09.appspot.com",
  messagingSenderId: "1091421121253",
  appId: "1:1091421121253:web:e1272524743881ffa8c20c",
  measurementId: "G-EJ1ZWWS6WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app); 