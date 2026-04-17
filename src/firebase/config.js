import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvegV7Nmbwlz2rpD7as1ZOvBcaOZI34is",
  authDomain: "project-ce28ce3b-386e-4e10-9af.firebaseapp.com",
  projectId: "project-ce28ce3b-386e-4e10-9af",
  storageBucket: "project-ce28ce3b-386e-4e10-9af.firebasestorage.app",
  messagingSenderId: "122441322837",
  appId: "1:122441322837:web:e02e4e8bbc2e0a252c5fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
