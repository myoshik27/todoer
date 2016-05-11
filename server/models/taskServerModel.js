// this is the task.js file located at server/models/task.js
// when run, this file will create the schema Tasks in our mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: "User", required:true},
	text: {type: String, required: true},
	done: Boolean,
	completed_at: Date,
	created_at: {type: Date, default: Date.now, required:true},
	updated_at: {type: Date, default: Date.now, required:true}
});

// create a model using schema
var Task = mongoose.model("Task", TaskSchema);

// make this availabe to our users in or Node applications
module.exports = Task;