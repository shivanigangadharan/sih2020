import React from 'react';

function name(){
  return "Lovetesh Chandra"
}

class NavBar extends React.Component {
  
  render(){
    return(
      <nav className="navbar navbar-default n-navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img alt="Brand" src="./logo3.png" className="brandIcon"/>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control n-form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default n-btn"><div className="glyphicon glyphicon-search"> </div></button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="n-a">{name()}</a></li>
              <li><a href="#" className="n-a">Home</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle n-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Activity Log</a></li>
                  <li><a href="#">News Feed preferences</a></li>
                  <li><a href="#">Settings</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default NavBar;