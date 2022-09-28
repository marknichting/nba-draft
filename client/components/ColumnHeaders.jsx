import React from "react";




function ColumnHeaders() {
  const columnNames = ['name', 'rebs', 'asts', 'pts']
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


export default ColumnHeaders;


