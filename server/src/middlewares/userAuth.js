const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const verifyToken = (req, res, next) => {
	const token = req.headers['authorization']
	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: 'Forbidden' })
		}
		req.token = decoded
		next()
	})
}

module.exports = { verifyToken }
