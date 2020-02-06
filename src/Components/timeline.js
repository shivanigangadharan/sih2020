import React from 'react';
import TimelineCard from './timelinecard';
import fire from '../firebase/fire'

const db = fire.database();

var rootRef = db.ref();
var userRef = rootRef.child('users');
var posts = rootRef.child('posts');
var likesRef = rootRef.child('likes')

class Timeline extends React.Component {

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
        <TimelineCard/>
        <TimelineCard/>
        <TimelineCard/>
        <TimelineCard/>
        <TimelineCard/>
        <TimelineCard/>

      </div>
    );
  }

}

export default Timeline;