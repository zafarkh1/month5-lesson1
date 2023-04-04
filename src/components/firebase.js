import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0_tT4BlzYE2WQof3wGuonEHPBodQrbi8",
  authDomain: "twitter-clone-30e46.firebaseapp.com",
  projectId: "twitter-clone-30e46",
  storageBucket: "twitter-clone-30e46.appspot.com",
  messagingSenderId: "988147731489",
  appId: "1:988147731489:web:60aeea56984758b2e96760"
});

const auth = app.auth();
export { auth };
export default app;
