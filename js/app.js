// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyg8z-iOf-al1tkE3aMHDa9Q89IcieG3k",
    authDomain: "checkpoint-demo-3eacf.firebaseapp.com",
    projectId: "checkpoint-demo-3eacf",
    storageBucket: "checkpoint-demo-3eacf.appspot.com",
    messagingSenderId: "23206350220",
    appId: "1:23206350220:web:4712a1cbc9ade5799b5aa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

async function signOut(){
    await firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
var currentUser = null
firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user) {
        currentUser = user;
        displayHelloUser()
      // User is signed in.
    } else {
        currentUser = null;     
    }
  });