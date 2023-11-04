// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxvCFNkXMoPFaXn3idbJqDuhS-dznifsM",
  authDomain: "votelanka-v1.firebaseapp.com",
  projectId: "votelanka-v1",
  storageBucket: "votelanka-v1.appspot.com",
  messagingSenderId: "740252145968",
  appId: "1:740252145968:web:25874fd7f74b4f03a810f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
