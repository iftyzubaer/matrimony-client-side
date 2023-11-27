import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9nlaSNGrajxWvlPOrQy4VNxw4Ym6OnlY",
  authDomain: "eternal-matches.firebaseapp.com",
  projectId: "eternal-matches",
  storageBucket: "eternal-matches.appspot.com",
  messagingSenderId: "511096456235",
  appId: "1:511096456235:web:069ba931a3d0a8a8d2d66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;