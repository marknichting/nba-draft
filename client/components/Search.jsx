import React  from "react";
import PropTypes from 'prop-types';


 function Search(props) {
 
  return (
    <div>
      <input type='text' id="search-bar"></input>
      <button onClick={props.search}> Search </button>
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.func,
}

export default Search;