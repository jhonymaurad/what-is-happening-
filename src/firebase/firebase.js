import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-zdsUyVahBOvSmxlKeiJD4js5mYEPSi8',
  authDomain: 'what-s-happening-in.firebaseapp.com',
  databaseURL: 'https://what-s-happening-in.firebaseio.com',
  projectId: 'what-s-happening-in',
  storageBucket: 'what-s-happening-in.appspot.com',
  messagingSenderId: '86695297494',
  appId: '1:86695297494:web:d47e85712440ec006fe477'
};
  // Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// firebase.database().ref().set({
//   name: 'jhony maurad',
//   age: 36,
//   isSingle: false
// })

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };

database.ref().set({
  name: 'veronica',
  status: 'single',
  age: 21,
  job: 'hair stylist'
})

database.ref('age').set(30)
