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
const upload = require('../config/multerConfig')

router.get('/all', getPosts)
router.get('/:postId', getPost)
router.get('/userPosts/:postId', getUserPosts)

router.put('/update', verifyToken, updatePost)
router.post('/create', verifyToken, upload.single('file'), createPost)
router.delete('/delete/:postId', verifyToken, deletePost)

module.exports = router
