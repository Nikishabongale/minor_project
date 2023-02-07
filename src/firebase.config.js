// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCTR0NbKvl-BkRSh_7fpjqU2vusBLl1078",
//   authDomain: "house-market-e61c9.firebaseapp.com",
//   projectId: "house-market-e61c9",
//   storageBucket: "house-market-e61c9.appspot.com",
//   messagingSenderId: "142403101495",
//   appId: "1:142403101495:web:286244ccbe5b75900e30b2",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAruYW-cfDUfU8TM5CvOTcRVn9pG809du4",
  authDomain: "house-market-e491b.firebaseapp.com",
  projectId: "house-market-e491b",
  storageBucket: "house-market-e491b.appspot.com",
  messagingSenderId: "61818734466",
  appId: "1:61818734466:web:1426a482de66b1ce36f19b",
  //measurementId: "G-H8ZZ85LSR4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
