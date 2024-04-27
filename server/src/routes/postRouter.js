const router = require("express").Router();
const { getPost, getPosts, deletePost, updatePost, createPost } = require("../controllers/postControllers");

router.get("/post", getPost)
router.get("/all", getPosts)
router.delete("/delete", deletePost)
router.put("/update", updatePost)
router.post("/create", createPost)

module.exports = router;