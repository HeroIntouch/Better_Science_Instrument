import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/database';



const storage = firebase.storage();
const db = firebase.firestore();
export {
  storage, firebase, db 
}