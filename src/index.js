import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

class Doc extends React.Component{
    componentDidMount(){
      document.title = "Aluconnect"
    }
  
    render(){
      return(
        <b> test </b>
      )
    }
  }

ReactDOM.render( 
    <BrowserRouter>
<App />

</BrowserRouter>,

document.getElementById('root'));


serviceWorker.unregister();
