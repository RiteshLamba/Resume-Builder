import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyCKoJQTgoEukrUOL4tbYMXm9ubM4DpFDNY",
  authDomain: "resume-builder-a95b5.firebaseapp.com",
  projectId: "resume-builder-a95b5",
  storageBucket: "resume-builder-a95b5.appspot.com",
  messagingSenderId: "908029535663",
  appId: "1:908029535663:web:ebd675979ea81aef9d7b5a"
}
firebase.initializeApp(fbObj);
export default firebase;
