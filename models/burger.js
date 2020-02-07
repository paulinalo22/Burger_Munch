// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (column, value, cb) {
    orm.insertOne("burgers", column, value, function (res) {
      cb(res);
    });
  },
  //needs to be passing id of burger that needs to be changed
  //tableInput = burgers, column=devoured, id = ?? grab it from id of button
  updateOne: function (burgerId, cb) {
    orm.updateOne("burgers", "devoured", burgerId, function (res) {
      cb(res);
    });
  }
};

// * Export at the end of the `burger.js` file.
module.exports = burger;