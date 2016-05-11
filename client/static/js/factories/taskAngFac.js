

todoer.factory("TaskFactory", function($http){
	var factory = {

		getTasks: function(callback){
			$http.get('/getTasks').success(function(response){
				callback(response);
			});
		}
	};	
	return factory;
})