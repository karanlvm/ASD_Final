// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG8gDQWDmJW29O-Nkbq55EPozVH6EgJxI",
  authDomain: "musiqi-9ef42.firebaseapp.com",
  projectId: "musiqi-9ef42",
  storageBucket: "musiqi-9ef42.appspot.com",
  messagingSenderId: "706237772804",
  appId: "1:706237772804:web:77e441335fd9d9c2667151",
  measurementId: "G-1T3MLBQX0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)