import React, { useState }  from "react";
import Search from "./Search.jsx"
import Stats from './Stats.jsx';


  
function App() {
  // define state
  let [playerStats, changeStats] = useState({});

  function search() {
    console.log('search function invoked!')
    const searchBar = document.querySelector('#search-bar');
    // console.dir(searchBar.value);
    const name = searchBar.value.trim().replace(' ', '+');
    // console.log('reformatted name: ', name)
    fetch(`api/playerStats?name=${name}`)
      .then(res => res.json())
      .then(data => {
        changeStats(data);
      })
      .catch(err => console.log(err))
  } 

  return (
    <div>
      <h1>NBA Player Stats</h1>
      <Search search={search} />
      <Stats />
    </div>
  )
  
}

export default App;