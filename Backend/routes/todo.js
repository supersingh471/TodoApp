//todo.js
//routes for todos
const express = require("express");
const router = express.Router();
const { Todo } = require("../db");
const { createTodo, updateTodo } = require("../types");

//route for entering todo
router.post("/todo", async (req, res) => {
	const parsePayload = createTodo.safeParse(req.body);
	if(!parsePayload.success) {
		return res.status(400).json({
			message: "Wrong inputs"
		});
	}

	const todos = await Todo.create({
		task: parsePayload.data.task,
		status: parsePayload.data.status,
		deadlines: parsePayload.data.deadlines
	});

	res.status(200).json({
		message: "Todo created successfully"
	})
	
})

module.exports = router;