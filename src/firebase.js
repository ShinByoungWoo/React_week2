// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAQfRBX_aqSDQGWLug7qxwHOnKjqMdLYRI",
  authDomain: "react-week2.firebaseapp.com",
  projectId: "react-week2",
  storageBucket: "react-week2.appspot.com",
  messagingSenderId: "802082330243",
  appId: "1:802082330243:web:97266753c0bedf24602db6",
  measurementId: "G-1KTVEP3FFN"
};

initializeApp(firebaseConfig);

export const db = getFirestore();