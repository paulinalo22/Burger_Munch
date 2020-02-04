// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {

  // EXAMPLE CODE FROM CATS APP
  //   all: function (cb) {
  //     orm.all("cats", function (res) {
  //       cb(res);
  //     });
  //   },
  //   // The variables cols and vals are arrays.
  //   create: function (cols, vals, cb) {
  //     orm.create("cats", cols, vals, function (res) {
  //       cb(res);
  //     });
  //   },
  //   update: function (objColVals, condition, cb) {
  //     orm.update("cats", objColVals, condition, function (res) {
  //       cb(res);
  //     });
  //   },
  //   delete: function (table, column, value, cb) {
  //     orm.delete(table, column, value, function (res) {
  //       cb(res);
  //     })
  //   }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;