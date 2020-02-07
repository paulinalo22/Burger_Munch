// * Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`
// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: function (tableInput, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, column, value], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  updateOne: function (tableInput, column, burgerId, cb) {
    var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
    connection.query(queryString, [tableInput, column, burgerId], function (err, res) {
      console.log("update" + queryString);
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
