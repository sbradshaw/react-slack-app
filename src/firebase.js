import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

import { FirebaseConfig } from "../config/keys";

firebase.initializeApp(FirebaseConfig);

export default firebase;
