// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation (DATA)
// =============================================================
var reservation = [{
    routeName: "first_name",
    name: "Bob",
    role: "Jedi Master",
    phoneNumber: 407-555-5555,
    email: 2000
}, {
    routeName: "second_name",
    name: "Darth Maul",
    role: "Sith Lord",
    phoneNumber: 407-566-6666,
    email: 1200
}, {
    routeName: "third_name",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    phoneNumber: 407-577-7777,
    email: 1350
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "/add.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/tables.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservation?", function(req, res) {
    var chosen = req.params.reservation;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < reservation.length; i++) {
            if (chosen === reservation[i].routeName) {
                return res.json(reservation[i]);
            }
        }
        return res.json(false);
    }
    return res.json(reservation);
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
    var newreservation = req.body;
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    reservation.push(newreservation);

    res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});