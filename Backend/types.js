const zod = require("zod");

const createTodo = zod.object({
	task: zod.string(),
	status: zod.string(),
	deadline: zod.string()
})

const updateTodo = zod.object({
	id: zod.string()
})

const signupBody = zod.object({
	username: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
	password: zod.string(),
})

const signinBody = zod.object({
	username: zod.string(),
	password: zod.string()
});

module.exports = {
	createTodo: createTodo,
	updateTodo: updateTodo,
	signupBody: signupBody,
	signinBody: signinBody
}