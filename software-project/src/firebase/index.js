import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDYRzHg5FndMbzGdSB9Lct4Hz2VvsPvJco",
  authDomain: "betterex-44164.firebaseapp.com",
  databaseURL: "https://betterex-44164.firebaseio.com",
  projectId: "betterex-44164",
  storageBucket: "betterex-44164.appspot.com",
  messagingSenderId: "330033366853",
  appId: "1:330033366853:web:1893b05c1ba3867f42a02c",
  measurementId: "G-M650H8YH3X"
};

firebase.initializeApp(config);


  const storage = firebase.storage();
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {
    storage, firebase, db , auth 
  }
