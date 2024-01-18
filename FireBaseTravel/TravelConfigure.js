// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Correct import for GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsp50T6JM0HE1AkwfgLMjaqRMUUT8EoMY",
  authDomain: "travelplanning-7c288.firebaseapp.com",
  projectId: "travelplanning-7c288",
  storageBucket: "travelplanning-7c288.appspot.com",
  messagingSenderId: "753612863166",
  appId: "1:753612863166:web:aa30ed7ca31c1f02f590ef",
  measurementId: "G-20L4RRL0R6"
};

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
export const GoogleAuthProviding = new GoogleAuthProvider(); 
export const db = getFirestore(app);
