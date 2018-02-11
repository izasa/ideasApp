import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAQYJ3V8Tz34r6KfSkqhk380HLTYg02HmM",
    authDomain: "baza-4be40.firebaseapp.com",
    databaseURL: "https://baza-4be40.firebaseio.com",
    projectId: "baza-4be40",
    storageBucket: "baza-4be40.appspot.com",
    messagingSenderId: "1074265286484"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;