import React from "react";
import PropTypes from 'prop-types';


function Team(props) {
  let keys = -1;
  const elArr = [];
  // create an array of column headers for the table
  for (const key of props.columnNames) {
    elArr.push(<th className="table-head" key={key}>{key}</th>)
  }

  // create rows for the table and fill out columns for each player
  const savedPlayers = props.savedPlayers;
 
  const rows = [];
  if (savedPlayers[0] !== undefined) {
    for (let i = 0; i < savedPlayers.length; i++ ) {
      const data = [];
      data.push(<td key={keys--}><button onClick={() => {
        let name =savedPlayers[i].name;
        console.log( name)
        props.deletePlayer(name);
      }}>delete</button></td>)
      // inner for loop fills out all of the columns for one player/row
      for (const key in savedPlayers[i]) {
        data.push(<td className="team-column" key={keys--}>{savedPlayers[i][key]}</td>)
      }
      rows.push(<tr className="team-data" key={keys--} data-testid='team-row'>{data}</tr>);
    }
  }

  return (
    <>
      <h2 className="team-header">Your Team</h2>
        <table className="team-table">
          <thead className="team-head">
            <tr>
              <th>action</th>
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
  columnNames: PropTypes.array,
  deletePlayer: PropTypes.func
}

export default Team;