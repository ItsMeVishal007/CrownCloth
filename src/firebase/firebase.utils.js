import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCpu4TZh8pnKdER1OJaCpge5O7QbXZlj3c",
  authDomain: "crowncloth-3dc71.firebaseapp.com",
  projectId: "crowncloth-3dc71",
  storageBucket: "crowncloth-3dc71.appspot.com",
  messagingSenderId: "345260367726",
  appId: "1:345260367726:web:00a3980612e0be53f46b7f",
  measurementId: "G-5SLC792R3N"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;