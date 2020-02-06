import React,{Component} from 'react';
import fire from './firebase/fire'

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email : '',
      password : ''
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState({  [e.target.name]:e.target.value });
    console.log(this.state.email,this.state.password)
  }
  
  render() {
    return(
      <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Login</h2><br></br>
      <input type="text" class="form-control" value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email" /><br></br>
      <input type="password" class="form-control" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password"/><br></br>      
      
      <button class="btn btn-lg btn-primary btn-block" type="submit" onClick = {this.login}>Login</button>   
    </form>
  </div>
      
    )
  }


}

export default Login;