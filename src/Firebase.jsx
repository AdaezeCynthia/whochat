// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa5HIC_DK7FtHySvYnW4dPYHxi6c3f6nM",
  authDomain: "adachat-e861f.firebaseapp.com",
  projectId: "adachat-e861f",
  storageBucket: "adachat-e861f.appspot.com",
  messagingSenderId: "64234483857",
  appId: "1:64234483857:web:7b4c63f41ee9b34fddcf30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 