import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAAJ62EkA6dPF1EtmJzQR8dnQ4xj2Y34i4",
  authDomain: "elpadelero-24e60.firebaseapp.com",
  projectId: "elpadelero-24e60",
  storageBucket: "elpadelero-24e60.appspot.com",
  messagingSenderId: "689191120604",
  appId: "1:689191120604:web:c8bcb32851193f17cd0e19",
  measurementId: "G-H5R9594SR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db