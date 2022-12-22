const axios = require('axios');
const controller = {};
const db = require('../models/authenticaionModel.js');


controller.getPlayerStats = function (req, mwRes, next) {
  console.log('invoked getPlayerStats');
  // make request to API
  let { name } = req.query;
  name = name.replace(' ', '+');
  axios
    .get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then(res => {
      const playerID = res.data.data[0].id;
      mwRes.locals.stats = res.data.data[0];
        axios
          .get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerID}`)
          // season_averages?season=2018&player_ids[]=1&player_ids[]=2
          .then(res => {
            mwRes.locals.stats = Object.assign(mwRes.locals.stats,res.data.data[0]);
            next();
          })
          .catch(err => next(err));
    })
    .catch(err => next(err));
}



controller.saveToDB = function (req, res,next) {
  console.log('inside of saveToDB middleware');
  // add something to DB
  const values = [];
  for (const key in req.body) {
    // columns.push(key);
    values.push(req.body[key]);
  }
  console.log(values)
  const query = `INSERT INTO saved_players  (name,position,team,games_played,min,fgm,fga,fg3m,ftm,fta,reb,ast,stl,blk,turnover,pts,fg_pct,ft_pct) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12, $13, $14, $15, $16, $17, $18) `
  // 'LeBron James','F','Los Angeles Lakers',53,'37:08',11.34,21.72,2.79,4.42,5.81,8.17,6.34,1.36,1.04,3.51,29.89,0.522,0.76
  db.query(query, values, (err) => {
    if (err) next(err);
    next()
  })
}



controller.getTeam = function (req, res, next) {
  const query = 'SELECT * FROM saved_players';
  db.query(query, (err, team)=> {
    if (err) next({err: err});
    if (!team) next({err: 'no saved players in database' });
    res.locals.team = team.rows;
    next();
  })
}

controller.deletePlayer = function (req, res, next) {
  const name = [req.query.player];
  const query = 'DELETE FROM saved_players WHERE name = $1';
  db.query(query, name, (err, ) => {
    if (err) next({ err: err });
    next();  
  })
}

// controller.get2021Players = function (req, mwRes, next) {
//   axios
//     .get(`https://www.balldontlie.io/api/v1/players?page=38+per_page=100`)
//     .then(res => {
      
//       const resultArr = res.data.data
//       for (let i = 0; i < resultArr.length; i++){
//         console.log(resultArr[i]);
//       }
//       console.log(res.data)
      // const playerID = res.data.data[0].id;
      
        // axios
        //   .get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerID}`)
        //   // season_averages?season=2018&player_ids[]=1&player_ids[]=2
        //   .then(res => {
        //     console.log(res.data.data[0])
        //     mwRes.locals.stats = Object.assign(mwRes.locals.stats,res.data.data[0]);
        //     next();
        //   })
        //   .catch(err => next(err));
//     })
//     .catch(err => next(err));
// }

module.exports = controller;