import React from "react";
import PropTypes from 'prop-types';
const db = require('../../server/playersModels.js');


function Team() {

  db.query('SELECT * FROM saved_players')

  return (
    <>
      <h2 className="team-header">Your Team</h2>
      <div className="team-container">
        <div>
          
      </div>
      </div>
    </>
  )
}


Team.propTypes = {
  savedPlayers: PropTypes.array,
}

export default Team;