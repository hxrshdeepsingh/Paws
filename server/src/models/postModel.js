const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	age: { type: String, required: true },
	gender: { type: String, required: true },
	breed: { type: String, required: true },
	species: { type: String, required: true },
	weight: { type: String, required: true },
	vaccinated: { type: String, required: true },

	address: { type: String, required: true },
	state: { type: String, required: true },
	number: { type: String, required: true },
	email: { type: String, required: true },
	username: { type: String, required: true },

	date: { type: Date, default: Date.now },
	userId: { type: String, required: true },
	postId: { type: String, required: true },
	image: {type: String, required: true}
})

const Post = mongoose.model('posts', postSchema)
module.exports = Post
