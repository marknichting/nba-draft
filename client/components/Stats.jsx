// import React, {useState} from "react";
import React from "react";
// import Row from './Row.jsx';
// import ColumnHeaders from "./ColumnHeaders.jsx";
import PropTypes from 'prop-types';


function Stats(props) {
  let keys = 100;
  const headers = [];
  for (const head of props.columnNames) {
    headers.push(<th key={keys++}> {head} </th>);
  }
  const player = []
  for (const stat in props.playerStats) {
    player.push(<td key={keys++}>{props.playerStats[stat]}</td>)
  }
  return (
    <>
      <h2 className="search-header"> Player Stats</h2>
      <table className="search-table">
        <thead className="search-head">
          <tr>
          {headers}
          </tr>
        </thead>
        <tbody>
          <tr>
            {player}
          </tr>
        </tbody>
        {/* <Row playerStats={props.playerStats} /> */}
      </table>
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