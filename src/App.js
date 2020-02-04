import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {Route, link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component = {landingpage()} />
      <Route exact path = '/signup' component = {signuppage()} />
      <Route exact path = '/profile' component = {profilepage()} />
      <Route exact path = '/settings' component = {settingspage()} />
    </div>
  );
}

function landingpage(){
  // Call firebase func to know if the user is logged in
  return SignIn;
}

function signuppage(){
  // Call firebase func to know if the user is logged in
  return SignUp;
}

function settingspage(){
  // Call firebase func to know if the user is logged in
  return SignIn;
}

function profilepage(){
  // Call firebase func to know if the user is logged in
  return SignIn;
}


export default App;
