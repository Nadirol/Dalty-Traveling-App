// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFs8g7DzNiGqariJYvNEafSS-MPw9Pkg",
  authDomain: "dalty-a8691.firebaseapp.com",
  projectId: "dalty-a8691",
  storageBucket: "dalty-a8691.appspot.com",
  messagingSenderId: "3093098862",
  appId: "1:3093098862:web:9c45290165d6690177917f",
  measurementId: "G-D2GCNYB292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
