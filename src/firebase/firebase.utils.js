import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDiD0ltkOteSihOAabaHB6F2DuUhft2I2k",
    authDomain: "crown-db-a8b2b.firebaseapp.com",
    databaseURL: "https://crown-db-a8b2b.firebaseio.com",
    projectId: "crown-db-a8b2b",
    storageBucket: "crown-db-a8b2b.appspot.com",
    messagingSenderId: "893372034274",
    appId: "1:893372034274:web:91977270f68d83ed3342bb",
    measurementId: "G-6FVGE0T6RQ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGitHub = () => auth.signInWithPopup(provider);


export default firebase;