const router = require('express').Router()
const {
	signup,
	signin,
	profile,
	update,
	uploader,
} = require('../controllers/userControllers')
const { verifyToken } = require('../middlewares/userAuth')
const upload = require('../config/multerConfig')

router.post('/signup', upload.single('file'), signup)
router.post('/signin', signin)
router.put('/update', verifyToken, update)
router.get('/profile', profile)

module.exports = router
