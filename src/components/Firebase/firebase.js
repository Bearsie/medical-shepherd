import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    //Authentication API
    createUserWithEmail = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    logInWithEmail = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    logOut = () => this.auth.signOut();

    //User API
    user = uid => this.db.collection('users').doc(uid);
    users = () => this.db.collection('users');
}


export default Firebase;