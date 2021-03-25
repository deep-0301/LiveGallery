import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCmKHFPAxZL4wV9GJz3j4k5GrpjWirwcnc",
    authDomain: "deep-galley.firebaseapp.com",
    projectId: "deep-galley",
    storageBucket: "deep-galley.appspot.com",
    messagingSenderId: "355323663344",
    appId: "1:355323663344:web:814e868301dde5220b4335"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

export default firebaseConfig;