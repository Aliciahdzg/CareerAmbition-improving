import { initializeApp } from "firebase/app";
import {getAuth ,signOut} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


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
 export const auth = getAuth(app);

export const db = getFirestore();

 export const signOff = () => {

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  });
}

