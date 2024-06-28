// Import Model
const Post = require("../models/postModel")


//Business logic
exports.createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        });

        // Saving the new Post into the database
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error: "Error while creating Post", 
        });
    }
}


// To Get All Posts
exports.getAllPosts = async (req, res) =>{
    try{
        const posts = await Post.find().populate("comments").exec();
        res.json({  
            posts,
        })
    }
    catch(err){
        return res.status(500).json({
            error: "Error while Fetching Posts", 
        });
    }
}