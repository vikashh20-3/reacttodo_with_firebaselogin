import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAftqz7Idsh0Gy_4YGytFD7G4k2YigTkTU",
  authDomain: "triluxo-88e1e.firebaseapp.com",
  projectId: "triluxo-88e1e",
  storageBucket: "triluxo-88e1e.appspot.com",
  messagingSenderId: "280898132139",
  appId: "1:280898132139:web:63b96f31feb925fdef3fee",
  measurementId: "G-TKV5G3VJJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

const db = getFirestore(app);

export { db };
