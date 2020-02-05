import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';

class App extends Component {
  render() {
    return (
      <div className="n-container">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
