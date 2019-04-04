import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDF2E6Immvab6fH2pXoDuYUCE5zRkqZX2M",
    authDomain: "jteeseetodos.firebaseapp.com",
    databaseURL: "https://jteeseetodos.firebaseio.com",
    projectId: "jteeseetodos",
    storageBucket: "jteeseetodos.appspot.com",
    messagingSenderId: "82399858927"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;