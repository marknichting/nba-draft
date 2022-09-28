import React, { useState }  from "react";


 function Search(props) {
 
  return (
    <div>
      <input type='text' id="search-bar"></input>
      <button onClick={props.search}> Search </button>
    </div>
  );
};


export default Search;