import React from "react";
import Row from './Row.jsx';
import ColumnHeaders from "./ColumnHeaders.jsx";
import PropTypes from 'prop-types';


function Stats(props) {
  console.log('player stats: ', props.playerStats)
  // const arrOfRows = [];
  // const columns = [];
  // for (const key in props.playerStats) {
  //   columns.push()
  // }

  
  return (
    <div className="headers">
      <ColumnHeaders />
      <br />
      <Row playerStats={props.playerStats} />
    </div>
  )

}

Stats.propTypes = {
  playerStats: PropTypes.object,
}

export default Stats;