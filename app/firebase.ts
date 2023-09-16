import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWr5AN2HKCMybjF7KDFvw7KNYO8TV9kP4",
  authDomain: "qvc-clone.firebaseapp.com",
  projectId: "qvc-clone",
  storageBucket: "qvc-clone.appspot.com",
  messagingSenderId: "635788868479",
  appId: "1:635788868479:web:9b564b05c5ab02b1c5784a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
