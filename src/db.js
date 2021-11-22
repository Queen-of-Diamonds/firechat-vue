import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmw9-ruy7OilIrBtnFmJjmaMQ3YHK19p4",
  authDomain: "firevuechat-898bb.firebaseapp.com",
  databaseURL: "https://firevuechat-898bb-default-rtdb.firebaseio.com",
  projectId: "firevuechat-898bb",
  storageBucket: "firevuechat-898bb.appspot.com",
  messagingSenderId: "39789862104",
  appId: "1:39789862104:web:134d333a11e3bd606a4bad",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
