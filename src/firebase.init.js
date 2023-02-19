
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTqTOndABD-Lm87B0oeg-1w8B0Vu85644",
  authDomain: "mk-sound.firebaseapp.com",
  projectId: "mk-sound",
  storageBucket: "mk-sound.appspot.com",
  messagingSenderId: "1066571700797",
  appId: "1:1066571700797:web:f6dc011fa60f39e89d6854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;