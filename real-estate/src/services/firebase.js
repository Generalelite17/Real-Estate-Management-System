import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeBqYoZFKdbFeERN4TAovz413CBXX9SsM",
  authDomain: "realestatemanagementsyst-6389.firebaseapp.com",
  projectId: "realestatemanagementsyst-6389",
  storageBucket: "realestatemanagementsyst-6389.appspot.com",
  messagingSenderId: "508569579924",
  appId: "1:508569579924:web:a773428577f027005d5f81",
  measurementId: "G-WF2VET9CDD",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export default {
  auth,
};
