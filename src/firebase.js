import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0mW-rdB7cTaXmZfROZ1IQO7g4FUK2xqY",
    authDomain: "ai-resume-builder-9bfa7.firebaseapp.com",
    projectId: "ai-resume-builder-9bfa7",
    storageBucket: "ai-resume-builder-9bfa7.firebasestorage.app",
    messagingSenderId: "396093055033",
    appId: "1:396093055033:web:a56c1bf3aa20841802ade8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };