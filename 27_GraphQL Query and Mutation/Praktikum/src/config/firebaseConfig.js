
import { getStorage } from "firebase/storage"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZABXYWLua9e3-B02B3EsZaITcb_-p_hc",
  authDomain: "example-marketplace-58fbe.firebaseapp.com",
  projectId: "example-marketplace-58fbe",
  storageBucket: "example-marketplace-58fbe.appspot.com",
  messagingSenderId: "566750231488",
  appId: "1:566750231488:web:fcd8c1a1ef33f3a9a9e625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize storage Firebase
export const storage = getStorage(app)