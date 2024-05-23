const router = require('express').Router()
const { signup, signin, profile, update } = require('../controllers/userControllers')
const { verifyToken } = require('../middlewares/userAuth')

router.post('/signup', signup)
router.post('/signin', signin)
router.put('/update', verifyToken, update)
router.get('/profile', profile)

module.exports = router