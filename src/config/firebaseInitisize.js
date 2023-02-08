import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import firebaseConfig from "./firebase";
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

// const x = setDoc(doc(db,"user"),{text:"dssgs"}).then((res)=>console.log(res));
// x();