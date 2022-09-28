const controller = {};
  

controller.getPlayerStats = function (req, res, next) {
  console.log('invoked getPlayerStats');
  // make request to API
  fetch('https://www.balldontlie.io/api/v1/stats')
    .then(res => res.json)
    .then(data => {
      console.log(data)
      next();
    })
    .catch(err => next(err));
}




module.exports = controller;