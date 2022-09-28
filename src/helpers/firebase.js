// untuk koneksi ke firebase menggunakna firebase.js
import firebase from 'firebase';

firebase.initializeApp({
  // apiKey: 'AIzaSyCET5ZKMztzhMS-hxnPnWpqiL_IfYkm3o0',
  // authDomain: 'crud-react-native-34efe.firebaseapp.com',
  // projectId: 'crud-react-native-34efe',
  // storageBucket: 'crud-react-native-34efe.appspot.com',
  // messagingSenderId: '891764006092',
  // appId: '1:891764006092:web:8cf10c216fcb645d75b669',
  // measurementId: 'G-3D9JT9P8EF',
  apiKey: 'AIzaSyCET5ZKMztzhMS-hxnPnWpqiL_IfYkm3o0',
  authDomain: 'crud-react-native-34efe.firebaseapp.com',
  databaseURL:
    'https://crud-react-native-34efe-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crud-react-native-34efe',
  storageBucket: 'crud-react-native-34efe.appspot.com',
  messagingSenderId: '891764006092',
  appId: '1:891764006092:web:8cf10c216fcb645d75b669',
  measurementId: 'G-3D9JT9P8EF',
});

const FIREBASE = firebase;

export default FIREBASE;
