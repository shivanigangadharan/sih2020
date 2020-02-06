import React from 'react';
import TimelineCard from './timelinecard';
import fire from '../firebase/fire'

const db = fire.database();

var rootRef = db.ref();
var userRef = rootRef.child('users');
var postRef = rootRef.child('posts');
var likesRef = rootRef.child('likes')
var x = [1,2,3,4,5];
class Timeline extends React.Component {
constructor(props){
  super(props);
this.state={
  value: [1,2,3,4],
};  
}



  searchdb(){
    
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

        {this.state.value.map((e)=>{
          return <TimelineCard/>
        })}

      </div>
    );
  }

}

export default Timeline;