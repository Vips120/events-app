import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAtg-DtirXPh8VAFSDsm_bNP7JZdkPpMSs",
  authDomain: "events-f42b7.firebaseapp.com",
  projectId: "events-f42b7",
  storageBucket: "events-f42b7.appspot.com",
  messagingSenderId: "663258218743",
  appId: "1:663258218743:web:4b6d3b8c3f475cf81653f2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;