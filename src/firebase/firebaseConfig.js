import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQBgnJISonte1uGKRlToRijuCBHTZXi_I",
  authDomain: "aayush-portfolio-3a572.firebaseapp.com",
  projectId: "aayush-portfolio-3a572",
  storageBucket: "aayush-portfolio-3a572.appspot.com",
  messagingSenderId: "163595991564",
  appId: "1:163595991564:web:2cfbe6a99ced03d380cc29",
  measurementId: "G-4L7E4VGV23"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };