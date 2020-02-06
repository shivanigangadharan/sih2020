import React from 'react';


function TimeLineCard1(){
  return(
    <>
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
    </>
    )
}

function TimeLineCard2(){
  return(
    <>
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
            <img className="n-card-img" src="https://img.collegepravesh.com/2017/07/BVCOE-Delhi.jpg" alt=""></img>
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
</>
    )
}

function TimeLineCard3(){
  return(
    <>
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
            <img className="n-card-img" src="https://www.bvcoend.ac.in/images/upload/BVP_Bharati_Vidyapeeths_College_of_Engineering_,New_Delhi_5714896141612FILE83264UPLOAD35877921473403029.jpg" alt=""></img>
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
</>
    )
}

class TimelineCard extends React.Component {

  render(){

    return(
      <>
      <TimeLineCard1/>
      <TimeLineCard2/>
      <TimeLineCard3/>
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
            <img className="n-card-img" src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1449899669bvcd1.JPG" alt=""></img>
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
        </>
    );
  }

}

export default TimelineCard;