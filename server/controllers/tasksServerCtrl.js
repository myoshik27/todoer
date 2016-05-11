// Server Controllers will be called on by the routes.js file and make calls to the database
// Server Controllers require mongoose and all models
console.log("Loaded Task Server Controller");
var mongoose = require('mongoose');
var Task = mongoose.model("Task");

module.exports = (function(){
	return {
		showTask: function(request, response){
			Task.find({}, function(errors, results){
				if(errors){
					console.log(errors);
				} else{
					response.json(results);
				}
			})
		}

	}
})();