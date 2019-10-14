import React from 'react';
import '../MusicChart.css';

const MusicChart = (props) => {

  if(props.charts.length === 0){
    return "Just about ready..."
  }

  const listItems = props.charts.map((song, index) => {
    return (
        <div value={index} key={index} className="chartItem">
          <p>{index+1}: {song['im:name'].label} - {song['im:artist'].label}</p>
          <img src={song['im:image'][0].label} alt="record-cover"></img>
          <br/>
          <audio controls>
            <source src={song.link[1].attributes.href}/>
          </audio>
        </div>
    )

  });

  return(
    <div>{listItems}</div>
  )
}

export default MusicChart;
