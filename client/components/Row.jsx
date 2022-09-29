import React from "react";
import PropTypes from 'prop-types';



function Row(props) {  
  const arr = [];
  for (const key in props.playerStats) {
      arr.push(<span className="player-stat" key={key+1}>{props.playerStats[key]}</span>)
  }

  return (
    <>
      {arr}
    </>
  )
}

Row.propTypes = {
  playerStats: PropTypes.object,
  exclude: PropTypes.object,
}

export default Row;