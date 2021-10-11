import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqbzx17mJ_GytoiiH34lC0icc15BUULY4",
  authDomain: "fir-2a262.firebaseapp.com",
  projectId: "fir-2a262",
  storageBucket: "fir-2a262.appspot.com",
  messagingSenderId: "84319187120",
  appId: "1:84319187120:web:a89f3becff9ad7b3a8cb75"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
