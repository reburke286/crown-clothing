import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD3yYFoLyXjPa1G4dRcuYocu5tJ1LBUaT4",
  authDomain: "crown-db-f5b43.firebaseapp.com",
  projectId: "crown-db-f5b43",
  storageBucket: "crown-db-f5b43.appspot.com",
  messagingSenderId: "747565899066",
  appId: "1:747565899066:web:d5f54f25303fdd0c180403",
  measurementId: "G-WTXEFS33WZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//configures Google login to app
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//can do different signin pop-ups, but we just want Google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
