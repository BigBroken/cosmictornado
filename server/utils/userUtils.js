var pg = require('pg');
var connectionString = require('../config/dbconfig');

module.exports = ((req, res, connection = connectionString) => {
  
  var userUtils = {
    newUser: (req, res) => {
      pg.connect(connection, (err, client, done) => {
        // Handle connection errors
        if (err) {
          done();
          console.log(err);
        }
        // SQL Query > Check if the username is taken
        var queryUniqueUser = client.query('SELECT EXISTS(SELECT * FROM users WHERE username = $1)', [req.body.username]);
        queryUniqueUser.on('row', (row) => {
          if (row.exists) {
            done();
            return res.json('That username already exists!');
          } else {
            // SQL Query > Add data
            var queryAddUser = client.query("INSERT INTO users (username) VALUES ($1)", [req.body.username]);
            queryAddUser.on('end', () => {
              done();
            });
            // SQL Query > Retrieve data
            var queryRetrieveUser = client.query("SELECT * FROM users WHERE username = $1", [req.body.username]);
            var result = [];
            // Stream results back one row at a time
            queryRetrieveUser.on('row', (row) => {
              result.push(row);
            });
            queryRetrieveUser.on('end', () => {
              done();
              return res.json(result);
            });
          }
        });
      });
    },
    allUsers: (req, res) => {
      pg.connect(connection, (err, client, done) => {
        // Handle connection errors
        if (err) {
          done();
          console.log(err);
        }
        // SQL Query > Retrieve data
        var queryAddUser = client.query("SELECT * FROM users");
        var results = [];
        // Stream results back one row at a time
        queryAddUser.on('row', (row) => {
          results.push(row);
        });
        queryAddUser.on('end', () => {
          done();
          return res.json(results);
        });
      });
    },
  };

  return userUtils;
})();