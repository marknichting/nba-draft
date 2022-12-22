const express = require('express');
const app = express();
const path = require('path');
const postgresController = require('./controllers/postgresController.js');
const mongoController = require('./controllers/mongoController.js');

// parse body of http request
app.use(express.json());

// routes

// handles request route for initial html page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../dist/index.html'));
})

// handles html pages request for bundle.js file
app.get('/bundle.js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
})


// route to make 
app.get('/playerStats', postgresController.getPlayerStats,(req, res) => {
    res.status(200).send(res.locals.stats);
  })
  
app.post('/save', mongoController.saveToDB ,(req, res) => {
  res.status(200).send('dont know what to send yet :)')
})


// route for getting the players that have been saved to the team    
app.get('/getTeam', postgresController.getTeam, (req, res) => {
  res.status(200).json(res.locals.team);
})
  
  
// delete player from the team
app.post('/delete', postgresController.deletePlayer, (req, res) => {
  res.status(200).send('player deleted')
})


// error not found
app.use((req, res) => {
  console.log('the endpoint you are making a request to does not exist')
  res.status(404).send('this endpoint does not exist');
})

// global error handler
app.use((err, req, res) => {
  // create default error obj
  let errObj = {
    log: 'unidentified error with middleware',
    status: 500,
    message:{ err: 'there is a server error'}
  }
  // reassign error obj if err passed in
  errObj = Object.assign(errObj, {log: err.log, message: err.message})
  console.log(errObj.log);
  res.status(errObj.status).send(errObj.message)
})

// assign port
app.listen(3000, ()=>{ console.log('listening on port 3000')});