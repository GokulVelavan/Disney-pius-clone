import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCDhTj8c0ZENykFGI3BpwDlNWX4lyKHR8",
  authDomain: "disney-clone-c2f47.firebaseapp.com",
  projectId: "disney-clone-c2f47",
  storageBucket: "disney-clone-c2f47.appspot.com",
  messagingSenderId: "582070961154",
  appId: "1:582070961154:web:a73e218328fbf3af8f131b",
  measurementId: "G-CXZKHVQQSL",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
