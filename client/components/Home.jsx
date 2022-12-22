import React, { useState, useEffect }  from "react";
import Search from "./Search.jsx"
import Stats from './Stats.jsx';
import Team from './Team.jsx';


  
function Home() {
  // define state
  let [playerStats, changeStats] = useState({});
  let [savedPlayers, changeSaved ] = useState([]);
  const columnNames = ['name', 'position', 'team', 'games_played', 'min', 'fgm', 'fga', 'fg3m', 'ftm', 'fta', 'reb', 'ast', 'stl', 'blk', 'turnover', 'pts', 'fg_pct', 'ft_pct'];

  useEffect(() => {
    getTeam();
  }, [savedPlayers.length])

  // search function cleans the returned data and saves in state
  function search() {
    console.log('search function invoked!')
    const searchBar = document.querySelector('#search-bar');
    const name = searchBar.value.trim().replace(' ', '+');
    fetch(`/playerStats?name=${name}`)
      .then(res => res.json())
      .then(data => {
        const exclude = new Set(['id', 'height_feet', 'height_inches', 'weight_pounds', 'player_id', 'pf', 'season', 'fg3a', 'oreb','dreb','fg3_pct']);
        const cleanedData = {name:null};
        for (const key in data) {
          if (!exclude.has(key)) {
            if (key === 'team') {
              cleanedData[key] = data[key].full_name
            } else {
              cleanedData[key] = data[key]
            }
          }
        }
        cleanedData.name = cleanedData.first_name + ' ' + cleanedData.last_name;
        delete cleanedData.first_name, delete cleanedData.last_name;
        console.log('cleaned ',cleanedData)
        changeStats(cleanedData);
      })
      .catch(err => console.log(err))
  }

  // save functionality saves a searched player to 'your team' section by saving player data in the database
  function save() {
    console.log('save function invoked!')
    // make a request to server with player stats
    fetch('/save', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(playerStats)
    })
      .then(() => {
        console.log('successful save: ')
        getTeam();
      })
      .catch(err => console.log(err))
  }


  function getTeam() {
    // function will be executed one upon component render
    console.log('getTeam executed')
    fetch('/getTeam')
      .then(res => res.json())
      .then(data => {
        // changing state with hooks method to reflect the information received from the server/DB. data return will reflect an array of objects where each object represents a saved player and their stats
        changeSaved(data);
      })
      .catch(err => console.log(err));
  }

  // deletePlayer will delete a player from 'your team' by removing them from the database
  function deletePlayer(player) {
    fetch(`/delete?player=${player}`, {
      method: 'POST',
    })
      .then(() => {
        console.log('player deleted');
        getTeam();
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>NBA Player Stats</h1>
      <Search search={search} />
      <Stats playerStats={playerStats} save={save} columnNames={columnNames} />
      <Team
        savedPlayers={savedPlayers}
        playerStats={playerStats}
        columnNames={columnNames}
        deletePlayer={deletePlayer}
      />
    </div>
  )
  
}

export default Home;