import app from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    //Authentication API
    createUserWithEmail = (email,password) => this.auth.createUserWithEmailAndPassword(email,password);

    logInWithEmail = (email,password) => this.auth.signInWithEmailAndPassword(email,password);

    logOut = () => this.auth.signOut();

    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

}


export default Firebase;