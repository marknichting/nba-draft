import React from "react";




function ColumnHeaders(props) {
  const columnNames = ['name', 'rebs', 'asts', 'pts']
  const arr = [];
  for (const column of columnNames) {
    arr.push(<span className="stat-column">{column}</span>);
  }
  return (
    <>
      {arr}
    </>
  )
}


export default ColumnHeaders;


