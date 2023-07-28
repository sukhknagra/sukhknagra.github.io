import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
//import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO8WdW-qUujPC9tB7RdkRzObjd-KK8178",
    authDomain: "auth-practice-75a0c.firebaseapp.com",
    projectId: "auth-practice-75a0c",
    storageBucket: "auth-practice-75a0c.appspot.com",
    messagingSenderId: "699933348199",
    appId: "1:699933348199:web:cd7c354ac35566b5471fc2",
    measurementId: "G-0MM45WY3Q6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const storage = getStorage();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

