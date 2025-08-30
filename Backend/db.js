const mongoose = require("mongoose");

mongoose.connect("");

const userSchema = new mongoose ({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		minLength: 5,
		maxLength: 10
	},

	firstname: {
		type: String,
		required: true,
		maxLength: 20
	},

	lastname: {
		type: String,
		required: true,
		maxLength: 20
	},

	password: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 20,
	}
})

const todo = new mongoose({
	task: {
		type: String,
		required: true,
		maxLength: 20
	},

	status: {
		type: String,
		required: true,
		maxLength: 20
	},

	deadlines: {
		type: Number,
		required: true,
	}
})

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todo);

module.exports{
	User,
	Todo
};
