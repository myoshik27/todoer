

todoer.factory("TaskFactory", function($http){
	var factory = {

		getTasks: function(callback){
			callback([
				{
					_id: 1,
					text: "task 1"
				},
				{
					_id: 2,
					text: "task 2"
				},
				{
					_id: 3,
					text: "task 3"
				}
			]);
		}
	};	
	return factory;
})