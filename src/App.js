import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Profile from './Components/profile-page/profile';
import SearchResults from './Components/search-results';

class App extends Component {
  render() {
    return (
      <div className="n-container">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/search-results' component={SearchResults} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
