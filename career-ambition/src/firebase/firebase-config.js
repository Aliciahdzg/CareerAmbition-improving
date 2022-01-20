// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaM64nNafIiUOiMVVMfed91uhV_lSHuRo",
  authDomain: "improving-tf.firebaseapp.com",
  projectId: "improving-tf",
  storageBucket: "improving-tf.appspot.com",
  messagingSenderId: "568383482690",
  appId: "1:568383482690:web:14ddc343d583991d0e76db"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth();