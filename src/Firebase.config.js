// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxXhkRLKNub8krDetA-oXZoz21hCZ96c",
  authDomain: "auth-mohamilon-3838f.firebaseapp.com",
  projectId: "auth-mohamilon-3838f",
  storageBucket: "auth-mohamilon-3838f.appspot.com",
  messagingSenderId: "310525302330",
  appId: "1:310525302330:web:42b780020e8395a7bd8703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;