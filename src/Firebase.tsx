import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKBORqvwwoVPavQjWYRBsIiKsPpnAzMDI",
  authDomain: "portfolio-3d62f.firebaseapp.com",
  projectId: "portfolio-3d62f",
  storageBucket: "portfolio-3d62f.appspot.com",
  messagingSenderId: "174398431968",
  appId: "1:174398431968:web:ba76399a67746f87776685",
  measurementId: "G-J9L99MMQC0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);