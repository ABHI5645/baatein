// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQH2lng43fDN08Dq386issUMfsFvWflDw",
  authDomain: "baatein-85f12.firebaseapp.com",
  projectId: "baatein-85f12",
  storageBucket: "baatein-85f12.appspot.com",
  messagingSenderId: "650671300972",
  appId: "1:650671300972:web:585a455fafb7e4911c5349"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);