import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB-sqCIkJS8hmoFTUQV3R9aNWCNEyBLT3U",
    authDomain: "dental-care-cff2c.firebaseapp.com",
    projectId: "dental-care-cff2c",
    storageBucket: "dental-care-cff2c.appspot.com",
    messagingSenderId: "19349834777",
    appId: "1:19349834777:web:589e5a50d50b6aeab1ee88",
    measurementId: "G-1JPCGSBMHX"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const firebaseAuth = getAuth(app);



