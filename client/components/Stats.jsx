import React from "react";
import PropTypes from 'prop-types';


function Stats(props) {
  let keys = 100;
  // create column headers for the search results table
  const headers = [];
  for (const head of props.columnNames) {
    headers.push(<th key={keys++}> {head} </th>);
  }

  // create a row for the player resulting from the search
  const player = []
  for (const stat in props.playerStats) {
    player.push(<td key={keys++} className="search-column">{props.playerStats[stat]}</td>)
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