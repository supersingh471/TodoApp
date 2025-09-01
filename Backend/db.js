const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://cohort2:supersingh471@cohort2.6d1abj6.mongodb.net/TodoApp");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 5,
		maxlength: 10
	},

	firstname: {
		type: String,
		required: true,
		maxlength: 20
	},

	lastname: {
		type: String,
		required: true,
		maxlength: 20
	},

	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 20,
	}
})

const todo = new mongoose.Schema({
	task: {
		type: String,
		required: true,
		maxlength: 20
	},

	status: {
		type: String,
		required: true,
		maxlength: 20
	},

	deadlines: {
		type: Number,
		required: true,
	}
})

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todo);

module.exports = {
	User,
	Todo
};
