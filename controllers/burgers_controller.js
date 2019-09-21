var express = require('express');

var router = express.Router();

var burger = require('../models/burger');
// var orm = require('../config/orm')

// Create all our routes and sets up logic within those routes 
// express routes
router.get("/", function(req, res) {
    // database connection
    burger.selectAll(function(data) {

        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
            "burgerName", "devoured"
        ], [req.body.burgerName, req.body.value],
        function(result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: 1,
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// export router obj so other files can access its properties
module.exports = router;