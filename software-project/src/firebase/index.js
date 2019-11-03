import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADErEcR_RxmFim8Cn6smCxTFfQxR1qXh8",
    authDomain: "firsttime-ecb00.firebaseapp.com",
    databaseURL: "https://firsttime-ecb00.firebaseio.com",
    projectId: "firsttime-ecb00",
    storageBucket: "firsttime-ecb00.appspot.com",
    messagingSenderId: "735374962433",
    appId: "1:735374962433:web:bace47e8f125af5085b500",
    measurementId: "G-B28496PE82"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }