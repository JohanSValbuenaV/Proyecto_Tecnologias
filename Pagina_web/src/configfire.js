import firebase from 'firebase'
// Initialize Firebase
var Secondaryconfig = {
  apiKey: "AIzaSyAFdZhhSuhQKRrV_Ul2TBfiM2duCzafByI",
  authDomain: "corrupcion-79f2e.firebaseapp.com",
  databaseURL: "https://corrupcion-79f2e.firebaseio.com/",
  projectId: "corrupcion-79f2e",
  storageBucket: "corrupcion-79f2e.appspot.com",
  messagingSenderId: "469563429855"
};
var secondary = firebase.initializeApp(Secondaryconfig, "secondary");


export const dbMSG =secondary.database();