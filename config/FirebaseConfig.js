// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "first-754e6.firebaseapp.com",
  projectId: "first-754e6",
  storageBucket: "first-754e6.firebasestorage.app",
  messagingSenderId: "852303874395",
  appId: "1:852303874395:web:1a75f3b751254d09b9b27e",
  measurementId: "G-7Z8HMELGDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);
export { app, analytics, db };

