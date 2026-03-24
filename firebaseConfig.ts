// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // 🔥 add this
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEEA0ihNt1LNkdp7Cixwu7NuNMsEaKkBc",
    authDomain: "imck-1d035.firebaseapp.com",
    projectId: "imck-1d035",
    storageBucket: "imck-1d035.firebasestorage.app",
    messagingSenderId: "1087152034701",
    appId: "1:1087152034701:web:d0447ce01c3c973ef4e3c4"
};

const app = initializeApp(firebaseConfig);

// 🔥 Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // 🔥 important