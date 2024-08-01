
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVjZGDyQBf0hJ_64_fCatBcyGIrLLg9GI",
  authDomain: "nepalbibishsewa.firebaseapp.com",
  projectId: "nepalbibishsewa",
  storageBucket: "nepalbibishsewa.appspot.com",
  messagingSenderId: "397067013739",
  appId: "1:397067013739:web:3f709314bf78179ac7eb2e",
  measurementId: "G-6NJWF2WPF1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);