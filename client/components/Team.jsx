import React from "react";
import PropTypes from 'prop-types';


function Team(props) {
  const elArr = [];
  for (const key of props.columnNames) {
    elArr.push(<th className="table-head" key={key}>{key}</th>)
  }

  console.log('Team: ', props.savedPlayers)
  // create rows and fill out columns for each player
  const savedPlayers = props.savedPlayers;
  const rows = [];
  if (savedPlayers[0] !== undefined) {
    for (let i = 0; i < savedPlayers.length; i++ ) {
      const data = [];
      for (const key in savedPlayers[i]) {
        data.push(<td className="team-column">{savedPlayers[i][key]}</td>)
      }
      rows.push(<tr className="team-data">{data}</tr>);
    }
  }

  return (
    <>
      <h2 className="team-header">Your Team</h2>
      <div className="team-container">
        <table>
          <thead>
            <tr>
              {elArr}    
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
      </div>
    </>
  )
}


Team.propTypes = {
  savedPlayers: PropTypes.array,
  playerStats: PropTypes.object,
  columnNames: PropTypes.array
}

export default Team;