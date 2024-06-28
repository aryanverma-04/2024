// Importing Mongoose 
const mongoose = require("mongoose")

// Route Handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like" // refernce to the post model
    }], 
    comments:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment" // refernce to the post model

    }], 
});

// Export
module.exports = mongoose.model("Post", postSchema)