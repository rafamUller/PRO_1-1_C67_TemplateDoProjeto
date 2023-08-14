import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAlRwLP56dAOc3-cc61doUc-QuBwhLSWdE",
  authDomain: "aula-dever.firebaseapp.com",
  projectId: "aula-dever",
  storageBucket: "aula-dever.appspot.com",
  messagingSenderId: "428966743169",
  appId: "1:428966743169:web:20771b4731267e3d3bd180"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
