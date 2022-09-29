const { Pool } = require('pg');

const url = 'postgres://zcuudwox:l1g6xp-jPjSgTlISlbO2ryTRIhRwN7W0@heffalump.db.elephantsql.com/zcuudwox';

const pool = new Pool({ connectionString: url, });


module.exports = {
  query: function (query, options, callback) {
    console.log('making request to DB ', query);
    pool.query(query, options, callback);
  }
}