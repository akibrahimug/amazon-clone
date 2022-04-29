// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWaIvx-BCkmMzobdTMA0IrHdqArt8E9g8",
  authDomain: "clone-2deb3.firebaseapp.com",
  databaseURL: "https://clone-2deb3-default-rtdb.firebaseio.com",
  projectId: "clone-2deb3",
  storageBucket: "clone-2deb3.appspot.com",
  messagingSenderId: "701571369482",
  appId: "1:701571369482:web:cc79bbab709d4102696df3",
  measurementId: "G-305JBQPRNC"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {db, auth}