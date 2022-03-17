// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6XcZV0rKU20VWR89MNCzlywxBYeoW8KA",
    authDomain: "instagram-clone-17a4c.firebaseapp.com",
    projectId: "instagram-clone-17a4c",
    storageBucket: "instagram-clone-17a4c.appspot.com",
    messagingSenderId: "571494435055",
    appId: "1:571494435055:web:19f22bc40ed609775f331a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage;

export { app, db, storage };