// this is the userServerModel.js file located at server/models/userServerModel.js
// this file is to create the schema users in our mongodb

// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;

// create a schema
var UserSchema = new mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
	admin: {type: Boolean, required:true},
	created_at: {type: Date, default: Date.now, required: true},
	updated_at: {type: Date, default: Date.now, required: true}
});

// run this function before saving
UserSchema.pre('save', function(next){
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
		if (err) return next(err);

		// hash the password along with our new salt
		bcrypt.hash(user.password, salt, function(err,hash){
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

// create a model using schema
var User = mongoose.model("User", UserSchema);

// make this availabe to our users in or Node applications
module.exports = User;