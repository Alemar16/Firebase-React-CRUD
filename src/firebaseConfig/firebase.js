// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFAA3xxN6aKJ_be8XjBTE7XV1EDNjZpJM",
  authDomain: "fir-react-crud-193ea.firebaseapp.com",
  projectId: "fir-react-crud-193ea",
  storageBucket: "fir-react-crud-193ea.appspot.com",
  messagingSenderId: "1022579943364",
  appId: "1:1022579943364:web:bf3bbd55804d6ad2e6e691",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);//se usa getFirestore para inicializar la base de datos 
