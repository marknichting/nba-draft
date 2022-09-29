import React from "react";
import PropTypes from 'prop-types';




function ColumnHeaders(props) {
  const columnNames = [];
  for (const key in props.playerStats) {
      columnNames.push(key);
  }
  const arr = [];
  for (const column of columnNames) {
    arr.push(<span className="stat-column" key={column}>{column}</span>);
  }
  return (
    <>
      {arr}
    </>
  )
}

ColumnHeaders.propTypes = {
  playerStats: PropTypes.object,
  exclude: PropTypes.object,
}

export default ColumnHeaders;


