// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh_ceIDQ3IVOk52P3tWqulsw4OVSPBLbY",
    authDomain: "proyecto-react-284d5.firebaseapp.com",
    projectId: "proyecto-react-284d5",
    storageBucket: "proyecto-react-284d5.firebasestorage.app",
    messagingSenderId: "172201474280",
    appId: "1:172201474280:web:6670c013b2e8211c97f15d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



