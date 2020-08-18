import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCns5ImeWrKcOEf05TdnEnqoLcpxGvRNxQ",
  authDomain: "nas-chatplate.firebaseapp.com",
  databaseURL: "https://nas-chatplate.firebaseio.com",
  projectId: "nas-chatplate",
  storageBucket: "nas-chatplate.appspot.com",
  messagingSenderId: "348245392021",
  appId: "1:348245392021:web:a5b63005102bb7f1cef99c",
  measurementId: "G-83SYEZQ0HX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export default db;
export {auth, provider};