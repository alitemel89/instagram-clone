// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            if (user) {
                window.location.href = "/";
            }
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}


export { app, db, storage, auth };