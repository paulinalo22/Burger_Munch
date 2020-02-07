// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
var express = require("express");
//    * `burger.js`
var burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  //creates id = id
  var burgerId = req.params.id;

  burger.updateOne(burgerId, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

