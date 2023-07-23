// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider,getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlXDE2FY8YRKVc_1uDbhHJy2vwUa_3TGk",
  authDomain: "hotel-booking-ffbdf.firebaseapp.com",
  projectId: "hotel-booking-ffbdf",
  storageBucket: "hotel-booking-ffbdf.appspot.com",
  messagingSenderId: "673328425932",
  appId: "1:673328425932:web:bbcc229fc0b9c8fd50cb69",
  measurementId: "G-QDHLLNFXBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider};

