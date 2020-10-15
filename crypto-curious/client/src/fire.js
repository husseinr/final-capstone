import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD9X6oA5XAdTGaSgwMIoLp1l3OvdzPDaXI",
    authDomain: "crypto-curious-e9b7f.firebaseapp.com",
    databaseURL: "https://crypto-curious-e9b7f.firebaseio.com",
    projectId: "crypto-curious-e9b7f",
    storageBucket: "crypto-curious-e9b7f.appspot.com",
    messagingSenderId: "968925695542",
    appId: "1:968925695542:web:a8540f4dae99fac64e5297",
    measurementId: "G-JG4HNNBR63"
  };

   const fire = firebase.initializeApp(firebaseConfig);
   firebase.analytics();

   export default fire;