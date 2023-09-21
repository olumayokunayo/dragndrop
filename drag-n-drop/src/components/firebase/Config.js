import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7Pyne5WIXt6zvzq0nN58b93L404VI8q0",
  authDomain: "dragndrop-1dd02.firebaseapp.com",
  projectId: "dragndrop-1dd02",
  storageBucket: "dragndrop-1dd02.appspot.com",
  messagingSenderId: "572257851022",
  appId: "1:572257851022:web:d7af445bac4c669abb9bdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
