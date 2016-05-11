// Server Controllers will be called on by the routes.js file and make calls to the database
// Server Controllers require mongoose and all models

var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports = (function(){
	return {
		showUser: function(request, response){
			User.find({}, function(errors, results){
				if(errors){
					console.log(errors);
				} else{
					response.json(results);
				}
			})
		},
	}
})