import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDs3VttHt4gi96rolvANeZdJFTaf5pXNpI",
    authDomain: "sbtc-b0802.firebaseapp.com",
    projectId: "sbtc-b0802",
    storageBucket: "sbtc-b0802.appspot.com",
    messagingSenderId: "166378875829",
    appId: "1:166378875829:web:1905b46876dbc28a7307fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()