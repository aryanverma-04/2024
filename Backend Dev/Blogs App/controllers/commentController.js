// Import Model
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")


//Business logic
exports.createComment = async(req, res) => {
    try{
        const {post, user, body} = req.body;
        const comment = new Comment({
            post, user, body
        });

        // Saving the new comment into the database
        const savedComment = await comment.save();

        // Finding the new post by ID, and adding the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new: true})
        .populate("comments").populate("likes")
        .exec();

        res.json({
            post: updatedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error: "Error while creating comment", 
        });
    }
}