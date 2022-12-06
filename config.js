import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD9d6AqKDOpFKeU7bfHqD_w48jjHSQedwA",
  authDomain: "library-test-a0cb5.firebaseapp.com",
  projectId: "library-test-a0cb5",
  storageBucket: "library-test-a0cb5.appspot.com",
  messagingSenderId: "592704385861",
  appId: "1:592704385861:web:9b4bea268fe33c0c9bc42c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
