import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBbnUZoCNLMMoJMNHeh-ZybaoSmmhLHXBM",
    authDomain: "did-you-knowthis.firebaseapp.com",
    databaseURL: "https://did-you-knowthis.firebaseio.com",
    projectId: "did-you-knowthis",
    storageBucket: "did-you-knowthis.appspot.com",
    messagingSenderId: "299573488947",
    appId: "1:299573488947:web:0a10f1eea8634061ade246"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
firebase.analytics()

export { firebaseAuth, firebaseDb }