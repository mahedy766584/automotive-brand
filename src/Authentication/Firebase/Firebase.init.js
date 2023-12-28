// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTaC8aeYoV6N0yDRmVXBB68p_5e1DqOYo",
    authDomain: "automotive-brand-133cf.firebaseapp.com",
    projectId: "automotive-brand-133cf",
    storageBucket: "automotive-brand-133cf.appspot.com",
    messagingSenderId: "492609344978",
    appId: "1:492609344978:web:02ac1ccec6966f3893a40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const aut = getAuth(app)
export default aut;