const players = require('../models/playersModel');

const mongoController = {};


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
    if (err) next({err: err});
    console.log(player);
    next();
  })
}


mongoController.getTeam = function (req, res, next) {
  players.find({}, (err, team) => {
    if (err) next({ err: err });
    res.locals.team = team;
    next();
  })
}

mongoController.deletePlayer = function (req, res, next) {
  const name = [req.query.player];
  players.findOneAndDelete({name}, (err, player) => {
    if (err) next({ err: err });
    next();  
  })
}

 
module.exports = mongoController;