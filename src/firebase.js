// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAejsuQBbBnCGZ26MbEVWIaoQpWiaG9MtY",
    authDomain: "clone-e47db.firebaseapp.com",
    projectId: "clone-e47db",
    storageBucket: "clone-e47db.appspot.com",
    messagingSenderId: "302447920285",
    appId: "1:302447920285:web:7eb6ef7646d5b2e9314074",
    measurementId: "G-ZMFTNM51XV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  export {db,auth};