import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6RHOa_mtfm8kU-9q6EiehnpWJ8Wa6k5w",
  authDomain: "midterm-chatroom-59293.firebaseapp.com",
  databaseURL: "https://midterm-chatroom-59293-default-rtdb.firebaseio.com",
  projectId: "midterm-chatroom-59293",
  storageBucket: "midterm-chatroom-59293.appspot.com",
  messagingSenderId: "983235879930",
  appId: "1:983235879930:web:2aa15370f415cf33af7a43",
  measurementId: "G-HDV99HL79S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();