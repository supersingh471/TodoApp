const zod = require("zod");

const createTodo = zod.object({
  task: zod.string().max(50), // allow reasonable length
  status: zod.enum(["pending", "in-progress", "completed"]), // match enum
  deadline: zod.coerce.number() // accept number or string, auto-convert
});

const updateTodo = zod.object({
  _id: zod.string(),
  //task: zod.string().optional(),
  status: zod.enum(["pending", "in-progress", "completed"]).optional(),
  //deadline: zod.coerce.number().optional()
});

const signupBody = zod.object({
  username: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string()
});

const signinBody = zod.object({
  username: zod.string(),
  password: zod.string()
});

module.exports = {
  createTodo,
  updateTodo,
  signupBody,
  signinBody
};
