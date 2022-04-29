// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3GEt_Rn0HlcpPnD5tSXkVaPW5tqzZOKI",
  authDomain: "clone-app-54c68.firebaseapp.com",
  projectId: "clone-app-54c68",
  storageBucket: "clone-app-54c68.appspot.com",
  messagingSenderId: "475338936574",
  appId: "1:475338936574:web:1171b9dacc11bde58855af"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {db, auth}