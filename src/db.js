import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "firevuechat-898bb.firebaseapp.com",
  databaseURL: "https://firevuechat-898bb-default-rtdb.firebaseio.com",
  projectId: "firevuechat-898bb",
  storageBucket: "firevuechat-898bb.appspot.com",
  messagingSenderId: process.env.VUE_APP_SENDER_ID, 
  appId: "1:39789862104:web:134d333a11e3bd606a4bad",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
