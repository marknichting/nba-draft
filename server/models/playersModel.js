const mongoose = require('mongoose');


// require('dotenv').config();
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