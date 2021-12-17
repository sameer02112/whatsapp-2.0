
// import firebase from "firebase"
import 'firebase/firestore';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/storage');
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// var firebase = require('firebase/app');


const firebaseConfig = {
  apiKey: "AIzaSyAII-xQqGPxrXAT47gg8W0Emzjnj9wpdIc",
  authDomain: "whatsapp-clone-f4820.firebaseapp.com",
  projectId: "whatsapp-clone-f4820",
  storageBucket: "whatsapp-clone-f4820.appspot.com",
  messagingSenderId: "932995639500",
  appId: "1:932995639500:web:abcad1e2d6e98df7273a69",
  measurementId: "G-ZF1X12JWR1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;



  