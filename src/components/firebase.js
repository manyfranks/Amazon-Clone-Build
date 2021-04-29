import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyW369FjtDV2jcyDs3ie46Eo_hlH8_SIw",
    authDomain: "fir-de961.firebaseapp.com",
    projectId: "fir-de961",
    storageBucket: "fir-de961.appspot.com",
    messagingSenderId: "419074859127",
    appId: "1:419074859127:web:e0d1cdaeacf5143326a672",
    measurementId: "G-FF6GG338RS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };