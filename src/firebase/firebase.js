// Import Firebase
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// ==============================
// Replace these values with
// your Firebase project's config
// ==============================

const firebaseConfig = {
  apiKey: "AIzaSyDW8mLnOby8GpQfiSl9SyOWv7OLjz2zUjQ",

  authDomain: "safesphere-ee8fa.firebaseapp.com",

  projectId: "safesphere-ee8fa",

  storageBucket: "safesphere-ee8fa.firebasestorage.app",

  messagingSenderId: "54902808927",

  appId: "1:54902808927:web:6771d0d98d9d2309c896ea",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
export const auth = getAuth(app);


// Firestore Database
export const db = getFirestore(app);


// Firebase Storage
export const storage = getStorage(app);


// Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();


export default app;