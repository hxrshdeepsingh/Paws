const router = require('express').Router()
const {
	getPost,
	getPosts,
	deletePost,
	updatePost,
	createPost,
} = require('../controllers/postControllers')
const { verifyToken } = require('../middlewares/userAuth')

router.get('/all', verifyToken, getPosts)
router.get('/post', getPost)
router.put('/update', updatePost)
router.post('/create', createPost)
router.delete('/delete', deletePost)

module.exports = router
