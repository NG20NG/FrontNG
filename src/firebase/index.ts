import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
//
//
//
//
const firebaseAppConfig = {
  apiKey: "AIzaSyCe4mwa6oS0kfi4FeFn-1vgGqkNZ3t8CLw",
  authDomain: "ng20-dd55f.firebaseapp.com",
  projectId: "ng20-dd55f",
  storageBucket: "ng20-dd55f.appspot.com",
  messagingSenderId: "880094969967",
  appId: "1:880094969967:web:c30560cc99b06b39024d9a",
  measurementId: "G-9P1DJK740W",
};
//
const firebaseApp = initializeApp(firebaseAppConfig);

const auth = getAuth(firebaseApp);

const analytics = getAnalytics(firebaseApp);
console.log(analytics);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("No User : " + user);
  }
});

const storage = getStorage(firebaseApp);

export { storage };
