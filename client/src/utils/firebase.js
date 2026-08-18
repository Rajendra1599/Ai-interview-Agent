
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA2SwXFR2xaLiXMHZiKBSUUUWW2CeX6Mic",
  authDomain: "temp-agent-fc7e0.firebaseapp.com",
  projectId: "temp-agent-fc7e0",
  storageBucket: "temp-agent-fc7e0.firebasestorage.app",
  messagingSenderId: "108453441627",
  appId: "1:108453441627:web:71fcc73503abf828c3cf7e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}



