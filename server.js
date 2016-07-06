// Express
var express = require('express');
var path = require('path');
var app = express();

// Body Parser -- needed to process POST data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Static -- Location of static files
app.use(express.static(path.join(__dirname + "/client")));

// required for pretty urls
app.all("/*", function(req, res, next) {
	res.sendfile("index.html", { root: __dirname + "/../todoer/client" });
});

// Mongoose -- used to connect to MongoDB
require('./server/config/mongoose.js');

// Routes 
require('./server/config/routes.js')(app);

// Listen
app.listen(8000)

