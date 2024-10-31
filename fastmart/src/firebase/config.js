import { initializeApp } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB9II6aqtpbvbqpkCTLIpRP5-ugM2Cin1Q",
    authDomain: "fastmart-9b617.firebaseapp.com",
    projectId: "fastmart-9b617",
    storageBucket: "fastmart-9b617.appspot.com",
    messagingSenderId: "654309297843",
    appId: "1:654309297843:web:d3d381c90478270e222ac6",
    measurementId: "G-8DS9WJNH1F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);