// factory methods get called by the controller and call on routes.
// On success, factory should run controller supplied callback function

todoer.factory("UserFactory", function($http){
	var factory = {

		getUsers: function(callback){
			console.log("getting Users from Factory")
		}
	};

	return factory;
})
