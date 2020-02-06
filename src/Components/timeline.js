import React from 'react';
import TimelineCard from './timelinecard';
import fire from '../firebase/fire'

const db = fire.database();

var num = [1,2,3,4,5];

function showI(){

for (var i = 0; i < num.length; i++) {
  return(
    <TimelineCard/>
    );
    showI();
}

}
var rootRef = db.ref();
var userRef = rootRef.child('users');
var posts = rootRef.child('posts');
var likesRef = rootRef.child('likes')
var x = [1,2,3,4,5];
class Timeline extends React.Component {
constructor(props){
  super(props);
this.state={
  value: [1,2,3,4],
};
}




  getposts(){
    posts.forEach(element => {
      var name = element.fullname;
      var postimage = element.postimage;
      var profileimage = element.profileimage;
      var date = element.date;
      var time = element.time;
      var user = element.uid;
      var caption = element.description;
    });
  }

  render(){
    return(
      <div className="content-timeline">
        <div className="n-post-card">
          <span>Compose Post</span>
          <div className="form-group">
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
          <button className="btn btn-primary" type="button">
              Post 
          </button>
        </div>

       <TimelineCard/>

      </div>
    );
  }

}

export default Timeline;