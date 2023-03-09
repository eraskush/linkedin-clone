import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCsqpz9H9TW2pyXXPK5ESJcXaI5HqJD88",
  authDomain: "linkedin-react-48de1.firebaseapp.com",
  projectId: "linkedin-react-48de1",
  storageBucket: "linkedin-react-48de1.appspot.com",
  messagingSenderId: "552319363941",
  appId: "1:552319363941:web:a865b6ab7524adcdd44f8c",
  measurementId: "G-RTRX4DL14D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
