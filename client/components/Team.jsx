import React from "react";
import PropTypes from 'prop-types';


function Team(props) {
  let keys = -1;
  const elArr = [];
  for (const key of props.columnNames) {
    elArr.push(<th className="table-head" key={key}>{key}</th>)
  }

  // console.log('Team: ', props.savedPlayers)
  // create rows and fill out columns for each player
  const savedPlayers = props.savedPlayers;
  const rows = [];
  if (savedPlayers[0] !== undefined) {
    for (let i = 0; i < savedPlayers.length; i++ ) {
      const data = [];
      for (const key in savedPlayers[i]) {
        data.push(<td className="team-column" key={keys--}>{savedPlayers[i][key]}</td>)
      }
      rows.push(<tr className="team-data" key={keys--}>{data}</tr>);
    }
  }

  return (
    <>
      <h2 className="team-header">Your Team</h2>
        <table className="team-table">
          <thead className="team-head">
            <tr>
              {elArr}    
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    </>
  )
}


Team.propTypes = {
  savedPlayers: PropTypes.array,
  playerStats: PropTypes.object,
  columnNames: PropTypes.array
}

export default Team;