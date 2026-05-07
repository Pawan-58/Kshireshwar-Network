// Helper to export Firebase `auth` if a configuration is provided.
// Usage: set `window.__FIREBASE_CONFIG__ = { apiKey: ..., authDomain: ... }` in a script
// before importing this module, or replace this file with your own configured module.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let auth = null;
if (typeof window !== 'undefined' && window.__FIREBASE_CONFIG__) {
  try {
    const app = initializeApp(window.__FIREBASE_CONFIG__);
    auth = getAuth(app);
    console.log('Firebase initialized from window.__FIREBASE_CONFIG__');
  } catch (err) {
    console.warn('Failed to initialize Firebase:', err);
  }
} else {
  // no-op: developer may replace this file with a project-specific one
  console.warn('No Firebase config found. Provide window.__FIREBASE_CONFIG__ or replace firebase.js with your config.');
}

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7e1R70vugWQ2x0q594H6m9wxm68TXHzc",
  authDomain: "kshireshwar-network.firebaseapp.com",
  projectId: "kshireshwar-network",
  storageBucket: "kshireshwar-network.firebasestorage.app",
  messagingSenderId: "798156366163",
  appId: "1:798156366163:web:146e3aa35d16c4488681a6",
  measurementId: "G-WPNLNBGNB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);