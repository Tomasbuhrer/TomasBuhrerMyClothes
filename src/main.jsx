import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnoIM_sR1AXYrp3KQEDyfG7C0PYE7m3uc",
  authDomain: "myclothes-tomasbuhrer.firebaseapp.com",
  projectId: "myclothes-tomasbuhrer",
  storageBucket: "myclothes-tomasbuhrer.appspot.com",
  messagingSenderId: "450496715562",
  appId: "1:450496715562:web:33a0f6c139060c79835c53",
  measurementId: "G-KS8LXZ75HK"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
