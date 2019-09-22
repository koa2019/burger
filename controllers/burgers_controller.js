var express = require('express');

var router = express.Router();

var burger = require('../models/burger');
// var orm = require('../config/orm')

// Create all our routes and sets up logic within those routes 
// express routes
router.get("/", function(req, res) {
    // database connection
    burger.selectAll(function(data) {

        // render to index.html the burger table from database
        res.render("index", { burgers: data });
    });
});

// .get() method call to database to show all burgers in api
router.get('/api/burgers', function(req, res) {
    burger.selectAll(function(results) {

        // render results from api as json
        res.json(results);
    });
});


// post route for adding a new burger to the burgers table in database
router.post("/api/burgers", function(req, res) {

    // reference to models/burger using the insersetOne() function defined in burger.js
    // 3 parameters column array, array of values to add to those columns, callback function
    burger.insertOne([

            // column variable names in burger table
            "burgerName", "devoured"

            // values captured from form on index.html
        ], [req.body.burgerName, req.body.devoured],

        // defining callback function that returns data from database
        function(err, result) {

            if (err) {
                return res.status(500).end();
            }

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