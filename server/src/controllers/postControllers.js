const Post = require('../models/postModel')
const User = require('../models/userModel')

const { v4: uuidv4 } = require('uuid')

// @public
const getPosts = async (req, res) => {
	const { tokenPayload } = req
	console.log(tokenPayload.public_id)
	try {
		const post = await Post.find().select('-_id -uid')
		return res.status(200).json(post)
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'An error occurred', error: error.message })
	}
}

// @public
const getPost = async (req, res) => {
	const { postId } = req.body
	try {
		const post = await Post.findOne({ postId: postId }).select('-_id -uid')

		if (!post) {
			return res.status(404).json({ message: 'Post not found' })
		}
		return res.status(200).json(post)
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'An error occurred', error: error.message })
	}
}

// @protected
const createPost = async (req, res) => {
	const { name, description, id } = req.body
	const uuid = uuidv4()
	try {
		const match = await User.findOne({ _id: id })

		if (match) {
			const post = new Post({
				name: name,
				description: description,
				userId: userId,
				postId: uuid,
			})
			await post.save()
			return res.status(200).json({ message: 'post created' })
		}

		return res.status(403).json({ message: 'User not found or not allowed' })
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'An error occurred', error: error.message })
	}
}

// @protected
const updatePost = async (req, res) => {
	const { userId, postId, uid, updatedData } = req.body
	try {
		const updatedPost = await Post.findOneAndUpdate(
			{ postId: postId, userId: userId, uid: uid },
			{ $set: updatedData },
			{ new: true },
		)
		if (!updatedPost) {
			return res.status(404).json({
				message: 'Post not found or user does not have permission',
			})
		}
		return res.status(200).json({ message: 'post updated' })
	} catch {
		return res.status(500).json({ message: 'error occurred' })
	}
}

// @protected
const deletePost = async (req, res) => {
	const { userId, postId } = req.body
	try {
		const post = await Post.findOne({ userId: userId, postId: postId })
		if (post) {
			await post.deleteOne()
			return res.status(200).json({ message: 'Post deleted' })
		} else {
			return res.status(404).json({ message: 'Post not found' })
		}
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred' })
	}
}

module.exports = { getPost, getPosts, createPost, updatePost, deletePost }
