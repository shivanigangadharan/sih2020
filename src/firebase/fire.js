import firebase from 'firebase';
import SignIn from '../SignIn'

var firebaseConfig = {
    apiKey: "AIzaSyCAD-fbVbe8yLaQiNvb6FajKN0NSfTOalY",
    authDomain: "aluconnect-c4b13.firebaseapp.com",
    databaseURL: "https://aluconnect-c4b13.firebaseio.com",
    projectId: "aluconnect-c4b13",
    storageBucket: "aluconnect-c4b13.appspot.com",
    messagingSenderId: "1008887722413",
    appId: "1:1008887722413:web:3681be8859ebfa311cb124"
};



const fire = firebase.initializeApp(firebaseConfig);

export default fire;