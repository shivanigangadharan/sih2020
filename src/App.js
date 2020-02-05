import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Profile from './Components/profile-page/profile';

class App extends Component {
  render() {
    return (
      <div className="n-container">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
