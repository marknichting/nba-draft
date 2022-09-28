import React from "react";


export default function Search(props) {
 
  return (
    <div>
      <input type='text'></input>
      <button onClick={props.search}> Search </button>
    </div>
  );
};