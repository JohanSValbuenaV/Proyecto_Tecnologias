import { initializeApp } from "firebase";
  // Initialize Firebase
  const App =initializeApp( {
    apiKey: "AIzaSyDi793xxOkOuel2f9XByHE-aqBJkcRSPww",
    authDomain: "vuehomeinfography.firebaseapp.com",
    databaseURL: "https://vuehomeinfography.firebaseio.com/",
    projectId: "vuehomeinfography",
    storageBucket: "vuehomeinfography.appspot.com",
    messagingSenderId: "734051962368"
  });


 

  export const db = App.database();