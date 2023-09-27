// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo5dO7V59L65kx1WckuHFHAjcRV7SGKqE",
  authDomain: "react-mock-project.firebaseapp.com",
  projectId: "react-mock-project",
  storageBucket: "react-mock-project.appspot.com",
  messagingSenderId: "41938776733",
  appId: "1:41938776733:web:4e7454a2f3772740f75a74",
  measurementId: "G-JDZYD2T4RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// This is just a placeholder for the config, change this file with the one generated from firebase