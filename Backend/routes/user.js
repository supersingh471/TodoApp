//signup and signin routes
const express = require("express");

const router = express.router();
const { User, Todo } = require("./db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
