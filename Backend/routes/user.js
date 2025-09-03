//user.js
//signup and signin routes
const express = require("express");

const router = express.Router();
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { signupBody, signinBody } = require("../types");

//route for user register
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

//route for user signin
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

	if(!user) {
		return res.status(401).json({ message: "Invalid credentials" });
	  }
	
	  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
	
	  res.json({ token });
})

module.exports = router;
