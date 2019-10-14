import React, {Component} from 'react';
import MusicChart from '../components/MusicChart';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      charts: []
    };
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({charts: data.feed.entry}))
    .catch(err => console.error(err));
  }

  render(){
    return(
      <div>
      <h3>Charts</h3>
      <MusicChart charts={this.state.charts} />
      </div>
    )
  }
}

export default MusicContainer;
