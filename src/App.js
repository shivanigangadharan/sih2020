import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Profile from './Components/profile-page/profile';
import SearchResults from './Components/search-results';
import fire from './firebase/fire';
import Login from './SignIn' 

class App extends Component {

  constructor(){
  super();
  this.state = {
    user:{},
  }
}

componentDidMount(){
  this.authListener();
}

authListener(){
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user})
    }
    else {
      this.setState({user:null});
    }
  })
}
  render() {
    return (
      <div className="n-container">
        <Router>
        {this.state.user ? <NavBar/>:""}
          <Switch>
            <Route exact path='/' component={this.state.user ? Home : Login} />
            <Route path='/profile' component={this.state.user? Profile:Login} />
            <Route path='/search-results' component={this.state.user? SearchResults:Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
