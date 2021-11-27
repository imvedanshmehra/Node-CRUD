const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect((err) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log("Successfully connected to DB");
  }
});

module.exports = connection;
