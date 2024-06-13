const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	number: { type: String, required: true },
	address: { type: String, required: true },
	state: { type: String, required: true },
	public_id: { type: String, unique: true, required: true },
	avatar: { type: String }, 
})

const User = mongoose.model('User', userSchema)
module.exports = User
