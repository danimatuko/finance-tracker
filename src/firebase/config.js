import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbBAs55TPuuUd4TWoqcP8v0_ppDcCfhZU',
  authDomain: 'mymoney-79573.firebaseapp.com',
  projectId: 'mymoney-79573',
  storageBucket: 'mymoney-79573.appspot.com',
  messagingSenderId: '529870062379',
  appId: '1:529870062379:web:e23c401532bf89b6833b6e',
};

// init firebase
firebase.initializeApp(firebaseConfig);
// init services
const firestore = firebase.firestore();
const fbAuth = firebase.auth();

export { firestore, fbAuth };
