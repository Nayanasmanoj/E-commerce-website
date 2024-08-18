import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBX1hQXDDNWABoOzvYH2GWV0dwNY879g8o",
  authDomain: "e-commerce-website-afc11.firebaseapp.com",
  projectId: "e-commerce-website-afc11",
  storageBucket: "e-commerce-website-afc11.appspot.com",
  messagingSenderId: "385666269877",
  appId: "1:385666269877:web:ff9a0739248c614b3a74fc",
  measurementId: "G-4J7YSFGG16"
};


export const app = initializeApp(firebaseConfig);
