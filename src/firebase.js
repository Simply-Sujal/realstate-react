// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUGbAgRiDc2UFmQ7rRGfukJlr8QR3_XCw",
    authDomain: "realtor-react-clone-c4e01.firebaseapp.com",
    projectId: "realtor-react-clone-c4e01",
    storageBucket: "realtor-react-clone-c4e01.appspot.com",
    messagingSenderId: "826824139031",
    appId: "1:826824139031:web:97b27e471f83e32715d752"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()