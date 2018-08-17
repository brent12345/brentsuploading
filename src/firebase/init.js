
  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAAbexKrw69BHwE3VVXMvSzh3VLmKnqvQ8",
    authDomain: "udemy-geo-ninjas-a7f3b.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-a7f3b.firebaseio.com",
    projectId: "udemy-geo-ninjas-a7f3b",
    storageBucket: "uploadimages-4132e.appspot.com",
    messagingSenderId: "8307796238"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  export default firebaseApp.firestore()
