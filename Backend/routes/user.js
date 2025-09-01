//user.js
//signup and signin routes
const express = require("express");

const router = express.Router();
const { User, Todo } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signupBody = zod.object({
	username: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
	password: zod.string(),
})

router.post("/signup", async (req, res) => {
	const validation = signupBody.safeParse(req.body);

	if(!validation.success) {
		return res.status(400).json({
			message: "Invalid input"
		})
	}

	const existingUser = await User.findOne({
		username: req.body.username
	})

	if(existingUser) {
		return res.status(400).json({
			message: "Username already exist"
		})
	}

	const user = await User.create({
		username: req.body.username,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		password: req.body.password
	})

	const userId = user._id;

	const token = jwt.sign({
		userId,
	},JWT_SECRET);

	res.json({
		message: "User register successfully",
		token
	})

})

const signinBody = zod.object({
	username: zod.string(),
	password: zod.string()
});

router.post("/signin", async (req, res) =>{
	const validation = signinBody.safeParse(req.body);

	if(!validation.success) {
		return res.status(400).json({
			message: "Wrong input"
		})
	}

	const user = await User.findOne({
		username: req.body.username,
		password: req.body.password
	})

	if(user) {
		const token = jwt.sign({
			userId: user._id
		},JWT_SECRET);
	}

	res.json({
		token
	});
})

module.exports = router;
