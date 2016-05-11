// Controller methods get called by partials and call on factory methods
// Controller anonymous function may inject multiple factories if needed

console.log("UsersController Loaded")


todoer.controller("UsersController", function(){
	var _this = this;
	
	this.getUsers = function(){
		console.log("Getting Users");
	}
})