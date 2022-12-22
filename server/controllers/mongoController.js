const players = require('../models/playersModel');



// testing saving a player
players.create({ name: 'Stephen Curry',
  name: 'Stephen Curry',
  position: 'G',
  schedule: ['2022-12-22', '12/23/2022'],
  minutes: 34.2,
  fgMade: 8.29,
  fgAttempted: 18.97,
  fgPercentage: 0.437,
  ftMade: 4.26,
  ftAttempted: 4.62,
  ftPercentage: 0.923,
  threePointersMade:4.43,
  Reb: 5.23,
  Ast: 6.29,
  Stl: 1.34,
  Blk: 0.34,
  TO: 3.23,
  Pts: 25.28,
  Health: 'healthy',
  nbaTeam: 'Golden State Warriors',
  fantasyTeam: 'Z'}, (err, player) => {
  if(err) console.log(err);
  console.log(player);
})
