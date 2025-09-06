//todo.js
//routes for todos
const express = require("express");
const router = express.Router();
const { Todo } = require("../db");
const { authMiddleware } = require("../authMiddleware");
const { createTodo, updateTodo } = require("../types");
const { safeParse } = require("zod");

//route for creating todo
router.post("/todo", authMiddleware, async (req, res) => {
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
	
});

//route for getting todo
router.get("/todos", authMiddleware, async (req, res) => {
	const id = req.query.id;

	
		try{
			if(id) {
				const todoItem = await Todo.findOne({_id: id, userId: req.userId});
				if(!todoItem) {
					return res.status(400).json({
						message: "Invalid token"
					});
				}
				return res.status(200).json({
					todo: todoItem
				})
			}

			const todos = await Todo.find({userId: userId});
			return res.status(200).json({todo: todos});

		}catch (e) {
			return res.status(500).json({msg: "Server error", error: e.message});
		}
});

//route for todo update
router.post("/completed", async (req, res) => {
	const updatePayload = updateTodo.safeParse(req.body);
	if(!updatePayload.success) {
		return res.status(401).json({
			message: "Invalid input"
		})
	}

	await Todo.updateOne({
		_id: req.body.id
	});

	return res.status(200).json({
		message: "Todo Updated"
	});
});

//route for deleting todo
router.delete("/delete", async (req, res) => {
	const deletePayload = req.params.id;
	if(!deletePayload === _id) {
		return res.status(401).json({
			message: "Invalid user"
		})
	}

	await Todo.findByIdAndDelete(deletePayload);

	return res.status(200).json({
		message: "Todo Deleted Successfully"
	})
});

module.exports = router;