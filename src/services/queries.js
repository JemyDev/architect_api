const Pool = require('pg').Pool;
const { user, host, database, password, pg_port } = require('../../config');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port: pg_port,
});

pool.on('connect', () => {
  console.log('connected to the db');
});


// Create a user
const createUser = async (name, email, password) => {
  pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    return results;
  });
};

module.exports = {
  createUser,
};