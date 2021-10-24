import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtPLivA1DOQyLx1s-aSKajDXHMO61uA7A",
  authDomain: "fir-dd4b8.firebaseapp.com",
  projectId: "fir-dd4b8",
  storageBucket: "fir-dd4b8.appspot.com",
  messagingSenderId: "1006008007337",
  appId: "1:1006008007337:web:9bf99069a3ee7b86a307b8"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
