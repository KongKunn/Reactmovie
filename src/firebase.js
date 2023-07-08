// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4j-7JMtCm1sYyUXgdx_u64sxnDVMilds",
  authDomain: "emovie-5a13b.firebaseapp.com",
  databaseURL: "https://emovie-5a13b-default-rtdb.firebaseio.com",
  projectId: "emovie-5a13b",
  storageBucket: "emovie-5a13b.appspot.com",
  messagingSenderId: "40622047432",
  appId: "1:40622047432:web:673171af0f7ff9e0dda5fd",
  measurementId: "G-F59B4ND5C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);