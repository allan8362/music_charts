import React from 'react';

const MusicChart = (props) => {

  if(props.charts.length === 0){
    return "Just about ready..."
  }

  const listItems = props.charts.map((song, index) => {
    return <li value={index} key={index}>
    {index+1}: {song['im:name'].label} - {song['im:artist'].label}
    </li>
  });

  return(
    <ul>{listItems}</ul>
  )
}

export default MusicChart;
