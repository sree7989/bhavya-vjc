// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvN2_0SkmcODcqOVqg3Tl0sRmwyHvaSdo",
  authDomain: "vjc-project.firebaseapp.com",
  projectId: "vjc-project",
  storageBucket: "vjc-project.appspot.com",
  messagingSenderId: "232845886321",
  appId: "1:232845886321:web:fbef48eda41d6c188b2cd0",
  measurementId: "G-JPH0CGYTXT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // 🟢 THIS WAS MISSING!

export { auth, provider };
