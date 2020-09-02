import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiquCltRb3xhJ70m_8Y0FrpT6tu97Hqg4",
  authDomain: "charityapp-c16f6.firebaseapp.com",
  databaseURL: "https://charityapp-c16f6.firebaseio.com",
  projectId: "charityapp-c16f6",
  storageBucket: "charityapp-c16f6.appspot.com",
  messagingSenderId: "317406129276",
  appId: "1:317406129276:web:45b1e03ba3b3d88677edf9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
