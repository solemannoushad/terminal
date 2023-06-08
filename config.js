import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {API_KEY} from "@env"


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "terminal-694b9.firebaseapp.com",
  projectId: "terminal-694b9",
  storageBucket: "terminal-694b9.appspot.com",
  messagingSenderId: "756833947046",
  appId: "1:756833947046:web:1213d7beb9555bf94c9367",
  measurementId: "G-RPR3BY6PL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}