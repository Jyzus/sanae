// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM7OaNukDxqRpkWDvaevOKbnOWKb7mRlY",
  authDomain: "sanae-8d927.firebaseapp.com",
  projectId: "sanae-8d927",
  storageBucket: "sanae-8d927.appspot.com",
  messagingSenderId: "1074033998252",
  appId: "1:1074033998252:web:60abb7419204ce3646a209",
  measurementId: "G-1SJGMQW1SM",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
