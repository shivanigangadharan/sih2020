import React from 'react';

function name(){
  return "Lovetesh Chandra"
}

class LeftSideBar extends React.Component {

  
  render(){
    return(
      <div className="left-sidebar-content">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-user"></span> {name()}
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-tasks"></span> News Feed
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-envelope"></span> Messages
          </li>
          {/* <li className="list-group-item">
          <span className="glyphicon glyphicon-shopping-cart"></span> Market Place
          </li> */}
        </ul>
        <li className="list-group-item">
          <div><bold>Explore</bold></div>
        </li>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-bookmark"></span> Saved
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-list-alt"></span> Events
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-file"></span> Pages
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-globe"></span> Explore
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-comment"></span> Groups
          </li>
        </ul>
      </div>
    );
  }

}

export default LeftSideBar;