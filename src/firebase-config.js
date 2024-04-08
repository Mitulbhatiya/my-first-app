// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBR6PMcSAZ4LqQYeatDKPCbM5IN57XZqA",
  authDomain: "test-reactjs-c0496.firebaseapp.com",
  projectId: "test-reactjs-c0496",
  storageBucket: "test-reactjs-c0496.appspot.com",
  messagingSenderId: "928821873067",
  appId: "1:928821873067:web:055ad1a433c459ba09eaee",
  measurementId: "G-E01WEKZHQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)