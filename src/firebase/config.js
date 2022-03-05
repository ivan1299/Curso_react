// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBPED191xbglGDYKTj_lqn_FwuRK2LFM",
  authDomain: "react-coder-e76f7.firebaseapp.com",
  projectId: "react-coder-e76f7",
  storageBucket: "react-coder-e76f7.appspot.com",
  messagingSenderId: "335703839525",
  appId: "1:335703839525:web:6ce38d69de855a5da480cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);