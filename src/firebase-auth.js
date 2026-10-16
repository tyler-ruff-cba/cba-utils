import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjGRbf8Vvd-Xl5KjuxDF6TW3cc08KzidI",
  authDomain: "cba-utils.firebaseapp.com",
  projectId: "cba-utils",
  storageBucket: "cba-utils.firebasestorage.app",
  messagingSenderId: "987393221526",
  appId: "1:987393221526:web:c72564e3ef814d590233b7",
  measurementId: "G-D4XQMLYVFN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};