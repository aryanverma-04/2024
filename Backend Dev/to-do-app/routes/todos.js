const express = require("express")
const router = express.router()

// Importing the Controller
const {createTodo} = require("../controller/createTodo");

// Defining API Routes
router.post("/createTodo", createTodo)

module.exports = router;