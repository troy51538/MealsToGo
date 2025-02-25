import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../App";

export const loginRequest = (email, password) => {
  // const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  // const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
