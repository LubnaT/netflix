// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkM5UzwgxWs01DGNaEv_mgHJxTIQf_Ibg",
  authDomain: "netflix-5a085.firebaseapp.com",
  projectId: "netflix-5a085",
  storageBucket: "netflix-5a085.appspot.com",
  messagingSenderId: "577055493422",
  appId: "1:577055493422:web:139f2b3a4c33d138d5bebf",
  measurementId: "G-F68WCJXEYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app