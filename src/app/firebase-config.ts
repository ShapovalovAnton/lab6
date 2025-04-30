import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArQhlUQ5AvlStVCzisRnSR0X6ChrKeVis",
  authDomain: "lab9-4246c.firebaseapp.com",
  databaseURL: "https://lab9-4246c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lab9-4246c",
  storageBucket: "lab9-4246c.firebasestorage.app",
  messagingSenderId: "146292891310",
  appId: "1:146292891310:web:aecdae0736b5b3264cd73f",
  measurementId: "G-46FRPE2KZS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);