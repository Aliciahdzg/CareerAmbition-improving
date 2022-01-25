import { initializeApp } from "firebase/app";
import {getAuth ,signOut, setPersistence, browserSessionPersistence} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore";


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

export const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence);

 export const signOff = () => {

  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  });
}

export const addNewDoc = (idUser, period, year, data) => {
  let id = idUser + period + year;
  return setDoc(doc(db, "careerAmbitions", id), data);
}

export const deleteDesiredDoc = (idDoc) => {
  return deleteDoc(doc(db, "careerAmbitions", idDoc));
}

export const getDocsPeriods = async (idUser) => {
  const querySnapshot = await getDocs(collection(db, "careerAmbitions"));
  if (querySnapshot.length !== 0){
    let docsData = []
    querySnapshot.forEach((doc) =>  {
      if (idUser === doc.data().useruid){
        docsData.push(doc.data())
      }
    });
    return docsData
  }
  return []
}

export const getDocCareerAmbition = async (idUser) => {
  const querySnapshot = await getDocs(collection(db, "textCareerAmbition"));
  if (querySnapshot.length !== 0){
    let docsData = []
    let idDoc = idUser + new Date().getFullYear()
    querySnapshot.forEach((doc) =>  {
      if (doc.id === idDoc){
        docsData.push(doc.data())
      }
    });
    return docsData
  }
  return []
}

export const addNewDocCA = (idUser, year, data) => {
  let id = idUser + year;
  return setDoc(doc(db, "textCareerAmbition", id), data);
}