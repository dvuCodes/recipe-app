import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "recipe-app-17565.firebaseapp.com",
  databaseURL:
    "https://recipe-app-17565-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recipe-app-17565",
  storageBucket: "recipe-app-17565.appspot.com",
  messagingSenderId: "1013216612480",
  appId: "1:1013216612480:web:e54d46a346e32fd9241665",
  measurementId: "G-C56Z5Y087S",
};

export default firebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
