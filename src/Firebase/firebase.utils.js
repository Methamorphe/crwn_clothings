import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJ5ArLq383mKTGTu1CpVclKX7rWc01BxE",
  authDomain: "crwn-db-727be.firebaseapp.com",
  databaseURL: "https://crwn-db-727be.firebaseio.com",
  projectId: "crwn-db-727be",
  storageBucket: "crwn-db-727be.appspot.com",
  messagingSenderId: "1008868657253",
  appId: "1:1008868657253:web:484e78994a62a726601e8c",
  measurementId: "G-GTYMHL78QG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
