// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqk8Qj1JV01rDO5hQZSCudio7GNN2Z7j4",
    authDomain: "hackrx-5e79d.firebaseapp.com",
    projectId: "hackrx-5e79d",
    storageBucket: "hackrx-5e79d.firebasestorage.app",
    messagingSenderId: "949294393404",
    appId: "1:949294393404:web:106f240b72a7c84948fb39",
    measurementId: "G-PDY6WP8YXH"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
