import firebase from "firebase/compat/app";
const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
