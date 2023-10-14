
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6zlPsinVoAw54LYkNzwLOhbK9Ki8hE4",
  authDomain: "instantchat-f4cb0.firebaseapp.com",
  projectId: "instantchat-f4cb0",
  storageBucket: "instantchat-f4cb0.appspot.com",
  messagingSenderId: "629077109103",
  appId: "1:629077109103:web:5be0911a616b2ad915609a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)