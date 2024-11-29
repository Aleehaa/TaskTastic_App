// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyBBtWIGNxBCbkRPnUAM_ybW02dhp186zFs",
  authDomain: "tasktastic-d6c10.firebaseapp.com",
  projectId: "tasktastic-d6c10",
  storageBucket: "tasktastic-d6c10.firebasestorage.app",
  messagingSenderId: "1020450120189",
  appId: "1:1020450120189:web:59f5f3cbcb048f3189f994"
};

// Initialize Firebase auth and db
const app = initializeApp(firebase);
const auth = getAuth(app);
const db = getDatabase(app);
export  {app,auth,db, firebase} ;
