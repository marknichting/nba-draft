const axios = require('axios');
const controller = {};
  

controller.getPlayerStats = function (req, mwRes, next) {
  console.log('invoked getPlayerStats');
  // make request to API
  console.log('req.query: ', req.query)
  let { name } = req.query;
  name = name.replace(' ', '+');
  axios
    .get(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then(res => {
      console.log(res.data.data[0]);
      const playerID = res.data.data[0].id;
      mwRes.locals.stats = res.data.data[0];
        axios
          .get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerID}`)
          // season_averages?season=2018&player_ids[]=1&player_ids[]=2
          .then(res => {
            console.log(res.data.data[0])
            mwRes.locals.stats = Object.assign(mwRes.locals.stats,res.data.data[0]);
            next();
          })
          .catch(err => next(err));
    })
    .catch(err => next(err));


}




module.exports = controller;