import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBWRIMiqxjsDtz4g15UE7B9pPh4RMFuwVk",
  authDomain: "plantas-vs-zombies-1e702.firebaseapp.com",
  databaseURL: "https://plantas-vs-zombies-1e702-default-rtdb.firebaseio.com",
  projectId: "plantas-vs-zombies-1e702",
  storageBucket: "plantas-vs-zombies-1e702.appspot.com",
  messagingSenderId: "431195069841",
  appId: "1:431195069841:web:cdcef6bd36b04595b78e30"
});

export default app;