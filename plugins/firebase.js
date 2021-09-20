import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyDaJv45NpMX-2svnL46OBZdorI0s1pywy4",
        authDomain: "twitterpj-bf406.firebaseapp.com",
        projectId: "twitterpj-bf406",
        storageBucket: "twitterpj-bf406.appspot.com",
        messagingSenderId: "946151007124",
        appId: "1:946151007124:web:74fc04965c3e20eae42581",
        measurementId: "G-VYR48Y8V2Q"
    }
  )
}