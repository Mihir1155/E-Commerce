// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvaf7Z_vKgfzhh0zKjCq4FanRQV4KTs34",
  authDomain: "e-com-7b97c.firebaseapp.com",
  projectId: "e-com-7b97c",
  storageBucket: "e-com-7b97c.appspot.com",
  messagingSenderId: "1070700295899",
  appId: "1:1070700295899:web:7100a2657b804a07113efe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
