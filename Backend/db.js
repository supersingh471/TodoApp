const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://cohort2:supersingh471@cohort2.6d1abj6.mongodb.net/TodoApp");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 5,
		maxlength: 50
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
		enum: ["pending", "in-progress", "completed"],
		maxlength: 20
	},

	deadline: {
		type: Number,
		required: true,
	},

	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

})

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todo);

module.exports = {
	User,
	Todo
};
