const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "burgers_db",
    user: "root",
    password: "rootroot"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;

