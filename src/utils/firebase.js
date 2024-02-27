// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-clone-4e308.firebaseapp.com",
  projectId: "netflix-clone-4e308",
  storageBucket: "netflix-clone-4e308.appspot.com",
  messagingSenderId: "169413082156",
  appId: "1:169413082156:web:248ec1193ffc35eebb2589",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
