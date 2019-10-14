import React from 'react';

const MusicChart = (props) => {

  if(props.charts.length === 0){
    return "Just about ready..."
  }

  const listItems = props.charts.map((song, index) => {
    return (
        <div value={index} key={index}>
          <p>{index+1}: {song['im:name'].label} - {song['im:artist'].label}</p>
          <img src={song['im:image'][0].label} alt="record-cover"/>
        </div>
    )

  });

  return(
    <ul>{listItems}</ul>
  )
}

export default MusicChart;
