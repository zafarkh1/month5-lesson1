import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGi9yXmm_NbilbPH2PgfVbOHSXdpX3K-Y",
  authDomain: "hometask-7.firebaseapp.com",
  projectId: "hometask-7",
  storageBucket: "hometask-7.appspot.com",
  messagingSenderId: "1066874233169",
  appId: "1:1066874233169:web:6ed22fa0a1aead3e0af370",
});

const auth = app.auth();
export { auth };
export default app;
