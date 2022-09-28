const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller.js');
// parse body
// ??? something else we need to do to every request?

// routes
//handles route for request to API
app.get('/playerStats', controller.getPlayerStats,(req, res) => {
  res.status(200).send(res.locals.stats);
})

app.get('/api/playerStats', controller.getPlayerStats, (req, res) => {
  console.log('this is from dev server proxy');
  res.status(200).send(res.locals.stats);
})

// handles request route for initial html page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../dist/index.html'));
})

// handles html pages request for bundle.js file
app.get('/bundle.js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
})

// error not found
app.use((req, res) => {
  console.log('the endpoint you are making a request to does not exist')
  res.status(404).send('this endpoint does not exist');
})

// global error handler


// assign port
app.listen(3000, ()=>{ console.log('listening on port 3000')});