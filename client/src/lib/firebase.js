import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCIQF7M0Y_9kfnOXC4cXdOpBbZ_QO9pvM",
  authDomain: "reactchat-7daea.firebaseapp.com",
  projectId: "reactchat-7daea",
  storageBucket: "reactchat-7daea.appspot.com",
  messagingSenderId: "894141297395",
  appId: "1:894141297395:web:165350903ef796d2c2fd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pass the app instance to the Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
