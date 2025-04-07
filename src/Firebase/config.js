// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlXDE2FY8YRKVc_1uDbhHJy2vwUa_3TGk",
  authDomain: "hotel-booking-f5c5f.firebaseapp.com",
  projectId: "hotel-booking-f5c5f",
  storageBucket: "hotel-booking-f5c5f.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const provider = new GoogleAuthProvider()

// Configure Google Auth Provider
provider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, db, provider };

