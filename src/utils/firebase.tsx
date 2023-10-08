import firebaseConfig from "@/db/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
