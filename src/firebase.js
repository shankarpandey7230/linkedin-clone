import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuvE5d9TW7BpwpMBx7dJx87Fd91dZZdIM",
  authDomain: "linkedin-clone-94cda.firebaseapp.com",
  projectId: "linkedin-clone-94cda",
  storageBucket: "linkedin-clone-94cda.appspot.com",
  messagingSenderId: "925060843805",
  appId: "1:925060843805:web:b8cb4a1c6d0192c02cf9f4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
