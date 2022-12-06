/**
 * Use for interacting with the firebase(nearby database)
 * It use Firebase authentication(for user login)
 * and firebase firestore(for database)
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1tjNbofF6o0mOIInsNjVNdh_oK127rdk",
  authDomain: "booking-site-d287b.firebaseapp.com",
  projectId: "booking-site-d287b",
  storageBucket: "booking-site-d287b.appspot.com",
  messagingSenderId: "271196849362",
  appId: "1:271196849362:web:65a8cf7c924f54d33b590b",
};

let app;
//To check if the app is not yet initialize. Initialize if not. If already initialize use the inilize version
//Initialize auth and db
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);

export { db };
