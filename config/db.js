const Pool = require('pg').Pool
const pool = new Pool({
 user: 'mjsoft',
 host: 'localhost',
 database: 'Argenia',
 password: 'Global12$',
 port: 5432,
})

pool.connect(function(err) {
    if (err) throw err;
});

module.exports = pool;