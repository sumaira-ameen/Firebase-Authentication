import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, 
sendPasswordResetEmail, signOut,GoogleAuthProvider,
signInWithPopup} from  'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

const firebaseConfig = {
  

  apiKey: "AIzaSyB0t734RXV8iEGMeJnKkTIM4zGjC03Ue1c",
  authDomain: "signin-signup-f6ff6.firebaseapp.com",
  projectId: "signin-signup-f6ff6",
  storageBucket: "signin-signup-f6ff6.firebasestorage.app",
  messagingSenderId: "552569059144",
  appId: "1:552569059144:web:6c09b63f1d0ba45500a57d",
  measurementId: "G-TFCGZSL5SK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword,onAuthStateChanged,
signInWithEmailAndPassword,sendPasswordResetEmail,signOut,provider, 
signInWithPopup,getFirestore,db ,collection, addDoc}