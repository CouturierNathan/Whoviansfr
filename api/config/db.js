const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error(`Error connecting to the database: ${err.code}`);
    console.error(`SQL Message: ${err.sqlMessage}`);
    console.error(`Stack Trace: ${err.stack}`);
    process.exit(1);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;