


todoer.controller("TasksController", function(TaskFactory){
	var _this = this;
	
	function getTasks(){
		TaskFactory.getTasks(function(tasks){
			_this.tasks = tasks;
		});
	}
	getTasks();
});

