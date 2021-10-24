import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARGvbDX9ZkeWT9cZ2aDScT-Xb0zCzBLj0",
  authDomain: "appdemo-d3423.firebaseapp.com",
  projectId: "appdemo-d3423",
  storageBucket: "appdemo-d3423.appspot.com",
  messagingSenderId: "1014593316534",
  appId: "1:1014593316534:web:ee4989cf2fc427a4d9e817"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
