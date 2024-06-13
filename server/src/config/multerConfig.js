const multer = require('multer')
const { v4: uuidv4 } = require('uuid')


const rand = () => {
	const uuid = uuidv4()
	return uuid;
}
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'upload/')
	},
	filename: function (req, file, cb) {
		cb(null, rand() + '-' + file.originalname)
	},
})

const upload = multer({ storage: storage })

module.exports = upload
