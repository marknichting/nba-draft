const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const url = process.env.mongo_URI;
console.log(url)
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('database connected');
})

db.on('error', (err) => {
  console.log('connection error: ', err)
})


// define schema for the database

const playersSchema = Schema({
  name: String,
  position: [String],
  schedule: [Date],
  minutes: Number,
  fgMade: Number,
  fgAttempted: Number,
  fgPercentage: Number,
  ftMade: Number,
  ftAttempted: Number,
  ftPercentage: Number,
  threePointersMade: Number,
  Reb: Number,
  Ast: Number,
  Stl: Number,
  Blk: Number,
  TO: Number,
  Pts: Number,
  Health: String,
  nbaTeam: String,
  fantasyTeam: String,
})



const players = model('players', playersSchema);

module.exports = players;