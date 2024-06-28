// Importing our Model 
const Todo = require("../models/Todo");

// Define route Handler
exports.getTodo = async(req, res) => {
    try{
        // Fetch all todo items from database
        const todos = await Todo.find({});

        // Updating the response
        res.status(200)
        .json({
            success: true,
            data:todos,
            message: "Entire todo data is feteched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
             success: false,
             error: err.message,
             message: "server error",
        })
    }
}

exports.getTodoById = async(req, res) => {
    try{
        // Fetch all todo items from database
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // Data for given Id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No data found with given Id"
            })
        }

        res.status(200)
        .json({
            success: true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        });
    } 
    catch(err){
        console.error(err);
        res.status(500)
        .json({
             success: false,
             error: err.message,
             message: `Todo ${id} data Not fetched`,
            })
    }
}
