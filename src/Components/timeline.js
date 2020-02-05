import React from 'react';
import TimelineCard from './timelinecard';

class Timeline extends React.Component {
  
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