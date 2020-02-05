import React from 'react';

class TimelineCard extends React.Component {
  
  render(){
    return(
        <div className="n-card">
            <div className="story-list-item">
              <div className="image-thumbnail">
                <div className="user-image">
                <img src="./logo3.png" alt="" className="icon-img"></img>
                </div>
              </div>
              <div className="user-title">
                <div>
                  Lovetesh Chandra
                </div>
                <div>
                  2 hours
                </div>
              </div>
            </div>
            <div>Hey!!</div>
            <img className="n-card-img" src="./DSC09318-2.jpg" alt=""></img>
            <div className="n-actions">
              <div>
                <div className="glyphicon glyphicon-thumbs-up" style={{marginRight:'10px'}}></div>Like
              </div>
              <div>
                <div className="glyphicon glyphicon-comment" style={{marginRight:'10px'}}></div>Comment
              </div>
              <div>
                <div className="glyphicon glyphicon-share-alt" style={{marginRight:'10px'}}></div>Share
              </div>
            </div>
        </div>
    );
  }

}

export default TimelineCard;