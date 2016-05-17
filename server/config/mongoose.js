// This is our mongoose.js file located in /config/mongoose.js
// This is a config file that connects to MongoDB and loads all of our models for us. We do this here because we don't want to have to connnect to the DB every time we require a model!

// all this file does is connect the app/server(server is the entire backend besides the db) to the database

// require mongoose
var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs')
// connect to the database -- path to database 
mongoose.connect('mongodb://127.0.0.1:27017/todoer_DB');

// specify the path to all of the models
var models_path = __dirname+'/../models'
// read all of the files in the models_path and for each one check, if it is a javascript file before requiring it

// should be loading all the schemas that we need in our database
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})