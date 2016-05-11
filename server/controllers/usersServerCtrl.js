// Server Controllers will be called on by the routes.js file and make calls to the database
// Server Controllers require mongoose and all models

var mongoose = require('mongoose');
var User = mongoose.model("User");
