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
		deadline: parsePayload.data.deadline,
		userId: req.userId
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

			const todos = await Todo.find({userId: req.userId});
			return res.status(200).json({todo: todos});

		}catch (e) {
			return res.status(500).json({msg: "Server error", error: e.message});
		}
});

//route for todo update
router.put("/completed", authMiddleware, async (req, res) => {
	const updatePayload = updateTodo.safeParse(req.body);
	if(!updatePayload.success) {
		return res.status(401).json({
			message: "Invalid input"
		})
	}

	const { _id } = updatePayload.data;

  try {
    const todo = await Todo.findOneAndUpdate(
		{ _id, userId: req.userId },
		{ $set: { status: "completed" } },
		{ new: true } // return the updated doc
	  );
	  
	  if (!todo) {
		return res.status(404).json({ message: "Todo not found or not yours" });
	  }
	  
	  return res.status(200).json({
		message: "Todo marked as completed",
		todo
	  });
  } catch (e) {
    return res.status(500).json({
      message: "Server error",
      error: e.message,
    });
  }
});

//route for deleting todo
router.delete("/delete/:id", authMiddleware, async (req, res) => {
	const todoId = req.params.id;

	if(!todoId) {
		return res.status(400).json({
			message: "Invalid Id"
		})
	}

	const deleted = await Todo.findOneAndDelete({
		_id : todoId,
		userId: req.userId
	});

	if(!deleted) {
		return res.status(400).json({message: "Todo not found"})
	}

	return res.status(200).json({
		message: "Todo deleted successfully"
	})
});

module.exports = router;