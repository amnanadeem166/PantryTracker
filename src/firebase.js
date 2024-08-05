import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjM43Si01aAx1PWtPbLdVkt2mXM-klR9U",
  authDomain: "pantry-tracker-82d19.firebaseapp.com",
  projectId: "pantry-tracker-82d19",
  storageBucket: "pantry-tracker-82d19.appspot.com",
  messagingSenderId: "606109337758",
  appId: "1:606109337758:web:7b48679edfb1011d32d38f"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };