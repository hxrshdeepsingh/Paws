const router = require('express').Router()
const {
	getPost,
	getPosts,
	deletePost,
	updatePost,
	createPost,
	getUserPosts,
} = require('../controllers/postControllers')
const { verifyToken } = require('../middlewares/userAuth')

router.get('/all', getPosts)
router.get('/post', getPost)
router.get('/getUserPosts', getUserPosts)

router.put('/update', verifyToken, updatePost)
router.post('/create', verifyToken, createPost)
router.delete('/delete', verifyToken, deletePost)

module.exports = router
