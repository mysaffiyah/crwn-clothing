import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1gWiVg3QW9sXCq3-QccWqIH7wmDHX8pg",
    authDomain: "crwn-clothing-db-c810d.firebaseapp.com",
    projectId: "crwn-clothing-db-c810d",
    storageBucket: "crwn-clothing-db-c810d.appspot.com",
    messagingSenderId: "433140734000",
    appId: "1:433140734000:web:312e2e0e4765b4fb0e35f5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;