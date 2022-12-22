const players = require('../models/playersModel');

const mongoController = {};


// testing saving a player
// players.create({
  // name: 'Stephen Curry',
  // position: 'G',
  // schedule: ['2022-12-22', '12/23/2022'],
  // minutes: 34.2,
  // fgMade: 8.29,
  // fgAttempted: 18.97,
  // fgPercentage: 0.437,
  // ftMade: 4.26,
  // ftAttempted: 4.62,
  // ftPercentage: 0.923,
  // threePointersMade:4.43,
  // rebounds: 5.23,
  // assists: 6.29,
  // steals: 1.34,
  // blocks: 0.34,
  // turnovers: 3.23,
  // points: 25.28,
  // health: 'healthy',
  // nbaTeam: 'Golden State Warriors',
  // fantasyTeam: 'Z'}, (err, player) => {
  // if(err) console.log(err);
//   console.log(player);
// })



mongoController.saveToDB = function (req, res,next) {
  console.log('inside of saveToDB middleware');
  // add something to DB
  console.log('values: ', req.body)
  const {name, position, team, min, fgm, fga, fg3m, ftm, fta, reb, ast, stl, blk, turnover, pts, fg_pct, ft_pct } = req.body;
  players.create({
    name: name,
    position: position, //from current data set there is only one position. future dataset will likely have multiple positions per player
    schedule: [], //current data set does not provide
    minutes: Number(min.slice(0,2)),
    fgMade: fgm,
    fgAttempted: fga,
    fgPercentage: fg_pct,
    ftMade: ftm,
    ftAttempted: fta,
    ftPercentage: ft_pct,
    threePointersMade: fg3m,
    rebounds: reb,
    assists:ast,
    steals: stl,
    blocks: blk,
    turnovers: turnover,
    points: pts,
    health: 'unavailable', //current data set does not provide
    nbaTeam: team,
    fantasyTeam: 'unavailable' //current data set does not provide
  }, (err, player) => {
    if(err) console.log(err);
    console.log(player);
  })
}

 
module.exports = mongoController;