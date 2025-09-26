// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCTNIqyiHgu2X5slndtT01XsiD2xXIzCk",
  authDomain: "next-firebase-45c89.firebaseapp.com",
  projectId: "next-firebase-45c89",
  storageBucket: "next-firebase-45c89.firebasestorage.app",
  messagingSenderId: "482734503212",
  appId: "1:482734503212:web:c5ebf9ce6675120b49e889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);