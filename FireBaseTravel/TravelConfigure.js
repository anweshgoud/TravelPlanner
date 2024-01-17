// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Correct import for GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB78U5NVxwZXw_oA5F0CZksAit_6-CO-SY",
  authDomain: "travel-planner-1cbb1.firebaseapp.com",
  projectId: "travel-planner-1cbb1",
  storageBucket: "travel-planner-1cbb1.appspot.com",
  messagingSenderId: "342144417605",
  appId: "1:342144417605:web:c8387e9a735f411b29c82c",
  measurementId: "G-WD8NR6DHXW",
};

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
export const GoogleAuthProviding = new GoogleAuthProvider(); 
export const db = getFirestore(app);
