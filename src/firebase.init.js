// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEh5k3sHR1al_ONyc5iYMGNcEChxkkE7s",
  authDomain: "independent-service-prov-72389.firebaseapp.com",
  projectId: "independent-service-prov-72389",
  storageBucket: "independent-service-prov-72389.appspot.com",
  messagingSenderId: "848525187083",
  appId: "1:848525187083:web:ea3058cb0cf70283ab4f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;