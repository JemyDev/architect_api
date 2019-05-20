const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  pg_port: process.env.PG_PORT,
  secretKey: process.env.SECRET_KEY,
};