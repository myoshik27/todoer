// Controller methods get called by partials and call on factory methods
// Controller anonymous function may inject multiple factories if needed


todoer.controller("UsersController", function(UserFactory){
	var _this = this;
	
	function getUsers(){
		UserFactory.getUsers(function(users){
			_this.users = users;
		})
	}
	getUsers();
})