const { Pool } = require('pg');

require('dotenv').config();
const url = process.env.postgres_URI;

const pool = new Pool({ connectionString: url, });


module.exports = {
  query: function (query, options, callback) {
    console.log('making request to DB ', query);
    pool.query(query, options, callback);
  }
}