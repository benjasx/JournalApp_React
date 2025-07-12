// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABcS1PdEuCvGzqfgpd39tvnvGbG9VDvlo",
    authDomain: "journal-app-45c8a.firebaseapp.com",
    projectId: "journal-app-45c8a",
    storageBucket: "journal-app-45c8a.firebasestorage.app",
    messagingSenderId: "1026875118224",
    appId: "1:1026875118224:web:aac05da8ca90598b777e15"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)