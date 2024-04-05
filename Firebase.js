import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgSC0dpk1w0fVFhL9PE2gejxDUiLLh8hU",
  authDomain: "teste-fb-66cbb.firebaseapp.com",
  projectId: "teste-fb-66cbb",
  storageBucket: "teste-fb-66cbb.appspot.com",
  messagingSenderId: "1093789252279",
  appId: "1:1093789252279:web:25382b94ac9336fccaab32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc };