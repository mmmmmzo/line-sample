import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDNkbcWwbyGt5vFkYFJASrqMCujN1wzEE",
    authDomain: "line-sample-6ccd4.firebaseapp.com",
    projectId: "line-sample-6ccd4",
    storageBucket: "line-sample-6ccd4.appspot.com",
    messagingSenderId: "176211162138",
    appId: "1:176211162138:web:5bb9f40daa15c3b7520da3"
});

const db = firebaseApp.firestore(); //DB
const auth = firebase.auth(); //認証情報
export { db, auth };