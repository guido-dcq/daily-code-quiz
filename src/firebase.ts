// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  getDocs,
  initializeFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

// https://firebase.google.com/docs/web/setup
async function getQuestions(db: Firestore) {
  const questionsCol = collection(db, "quiz_questions");
  const questionsSnapshot = await getDocs(questionsCol);
  const quesetionsList = questionsSnapshot.docs.map((doc) => doc.data());
  return quesetionsList;
}

export { db, getQuestions };
