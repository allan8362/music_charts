import React, {Component} from 'react';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      charts: []
    };
  }

  render(){
    return(
      <div>
      <h3>Music Charts</h3>
      </div>
    )
  }
}

export default MusicContainer;
