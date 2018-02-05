import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyB3EaZYodGksLCg2BjDlWzP_N9zCsufrYM",
  authDomain: "chatroom-123.firebaseapp.com",
  databaseURL: "https://chatroom-123.firebaseio.com",
  projectId: "chatroom-123",
  storageBucket: "",
  messagingSenderId: "337155876463"
};


export const fire = firebase.initializeApp(config);
export const firebaseSignOut=fire.auth(); 
export const database=fire.database().ref('/');

