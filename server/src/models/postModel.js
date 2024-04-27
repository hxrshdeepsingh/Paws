const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    userId: { type: String },
    postId: { type: String },
    uid: { type: String }
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;