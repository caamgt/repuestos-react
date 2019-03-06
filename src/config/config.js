import firebase from 'firebase';

export const DB_CONFIG = {
    apiKey: "AIzaSyD3UU9ZZ5RDE9zzE3xq2CFxsIqqiwdYiOg",
    authDomain: "repuestos-3d2bd.firebaseapp.com",
    databaseURL: "https://repuestos-3d2bd.firebaseio.com",
    projectId: "repuestos-3d2bd",
    storageBucket: "repuestos-3d2bd.appspot.com",
    messagingSenderId: "332305001516"
};
firebase.initializeApp(DB_CONFIG);