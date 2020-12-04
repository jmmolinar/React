import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCSWkh3ZoNWj0O85YcwamKu-MlSgwdsgz4",
        authDomain: "coder-ecommerce-1f345.firebaseapp.com",
        projectId: "coder-ecommerce-1f345",
        storageBucket: "coder-ecommerce-1f345.appspot.com",
        messagingSenderId: "51959422705",
        appId: "1:51959422705:web:34652cbd6b40d4ab4d1350",
        measurementId: "G-6NW57P77KX"
    }
)

export const getFirebase = () => {
    return app;
}

//Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}