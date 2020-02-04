// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// REPLACE CAT WITH BURGER
router.get("/", function (req, res) {
  // cat.all(function (data) {
  //   var hbsObject = {
  //     cats: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});

router.post("/api/cats", function (req, res) {
  // cat.create([
  //   "name", "sleepy"
  // ], [
  //   req.body.name, req.body.sleepy
  // ], function (result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
});

// router.put("/api/cats/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // delete route
// router.delete("/api/cats/:id", function (req, res) {
//   const id = req.params.id;

//   console.log("id", id);

//   cat.delete("cats", "id", id, function (result) {
//     if (result.affectedRows) {
//       return res.status(200).end();
//     } else {
//       return res.status(404).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;