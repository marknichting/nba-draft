import React from "react"
import Search from "./Search.jsx"

function search() {
  console.log('under construction!')
  fetch('/playerStats');
}
 
function App() {
  return (
    <div>
      <h1>NBA Player Stats</h1> 
      <Search/>
    </div>
  )
}

export default App; 