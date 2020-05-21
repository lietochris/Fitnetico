import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDjwq-C4a8CYgaL4gz47FgP8O_t1mhu1yg",
  authDomain: "fitnetico.firebaseapp.com",
  databaseURL: "https://fitnetico.firebaseio.com",
  projectId: "fitnetico",
  storageBucket: "fitnetico.appspot.com",
  messagingSenderId: "628504822747",
  appId: "1:628504822747:web:e7ea87401d81fda6a31dfe"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export {firebase, db, auth}
