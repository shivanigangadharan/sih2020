import React from 'react';

class RightSideBar extends React.Component {
  
  render(){
    return(
      <div className="right-sidebar-content">
        <div className="sidebar-block">
          <span>Recent</span>
          <a href="#">Archive</a>

          <div className="story-list">
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Murali
              </div>
              <div>
                20 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Alice
              </div>
              <div>
                2 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Bob
              </div>
              <div>
                22 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Cathey
              </div>
              <div>
                10 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                David
              </div>
              <div>
                4 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
                <img src="./logo3.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Murali
              </div>
              <div>
                20 hours ago
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="sidebar-block">
          <span> 2 Invitations Waiting<a>Event Invitations</a> </span>
        </div>
      </div>
    );
  }

}

export default RightSideBar;