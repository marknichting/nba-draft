// import React, {useState} from "react";
import React from "react";
import Row from './Row.jsx';
import ColumnHeaders from "./ColumnHeaders.jsx";
import PropTypes from 'prop-types';


function Stats(props) {
  return (
    <>
      <h2 className="result-header"> Player Stats</h2>
      <div className="stat-container">
        <ColumnHeaders playerStats={props.playerStats}/>
        <Row playerStats={props.playerStats} />
      </div>
      <button onClick={props.save}> Save Player</button>
    </>
  )

}

Stats.propTypes = {
  playerStats: PropTypes.object,
  save: PropTypes.func,
  columnNames: PropTypes.array

}

export default Stats;