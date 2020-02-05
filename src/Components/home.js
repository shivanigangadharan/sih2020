import React from 'react';
import LeftSideBar from './leftsidebar';
import RightSideBar from './rightsidebar';
import TimeLine from './timeline';
class Home extends React.Component {
  
  render(){
    return(
      <div className="body-container">
        <div className="left-sidebar">
          <LeftSideBar/>
        </div>
        <div className="content">
          <TimeLine/>
        </div>
        <div className="right-sidebar">
          <RightSideBar/>
        </div>
      </div>
    );
  }

}

export default Home;