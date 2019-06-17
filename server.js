// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("app/public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================
// html routes 2routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("./survey", function(req, res) {
//   res.sendFile(path.join(_direname, "survey.html"));

//   console.log(survey);
// });

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// // Displays all possible friends
// app.get("/api/friends", function(req, res) {
//   return res.json(friend);
// });

// // Displays a single character, or returns false
// app.get("/api/friends/:name", function(req, res) {
//   var chosen = req.params.friend;

//   console.log(chosen);

//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].name) {
//       return res.json(friend[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friend.push(newFriend);

  res.json(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
