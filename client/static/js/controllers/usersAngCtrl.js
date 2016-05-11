// Controller methods get called by partials and call on factory methods
// Controller anonymous function may inject multiple factories if needed


todoer.controller("UsersController", function(UserFactory){
	var _this = this;
	
	this.getUsers = function(){
		UserFactory.getUsers();
	}
})