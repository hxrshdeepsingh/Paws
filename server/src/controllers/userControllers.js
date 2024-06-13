const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { v4: uuidv4 } = require('uuid')
dotenv.config()

// @protected
const signup = async (req, res) => {
	const { username, password, email, number, address, state } = req.body
	const avatar = req.file;
	try {
		const existingUser = await User.findOne({ email: email })
		if (existingUser) {
			return res
				.status(400)
				.json({ message: 'User already registered with this email' })
		} else {
			const hashedPassword = await bcrypt.hash(password, 13)
			const uuid = uuidv4()
			const creation = await User.create({
				username: username,
				email: email,
				password: hashedPassword,
				number: number,
				address: address,
				state: state,
				public_id: uuid,
				avatar: avatar.filename
			})

			const tokenPayload = {
				private_id: creation._id,
				public_id: creation.public_id,
			}
			const token = jwt.sign(tokenPayload, process.env.SECRET_KEY)
			return res.status(201).json({ token: token, user: creation })
		}
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' })
	}
}

// @protected
const signin = async (req, res) => {
	const { email, password } = req.body

	try {
		const existingUser = await User.findOne({ email: email })
		if (!existingUser) {
			return res.status(404).json({ message: 'User not found' })
		}

		const matchPassword = await bcrypt.compare(password, existingUser.password)
		if (!matchPassword) {
			return res.status(400).json({ message: 'User credentials are invalid' })
		}

		const token = jwt.sign(
			{ private_id: existingUser._id, public_id: existingUser.public_id },
			process.env.SECRET_KEY,
		)

		return res.status(201).json({ token: token, user: existingUser })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'Internal server error' })
	}
}

// @protected
const update = async (req, res) => {
	const { token } = req
	const { data } = req.body
	try {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: token.private_id },
			{ $set: data },
			{ new: true },
		)

		if (!updatedUser) {
			return res.status(404).json({ message: 'User not found' })
		}

		return res.status(200).json(updatedUser)
	} catch (error) {
		console.error('Error occurred:', error)
		return res
			.status(500)
			.json({ message: 'An error occurred', error: error.message })
	}
}

// @Public
const profile = async (req, res) => {
	const { public_id } = req.body

	try {
		const user = await User.find({ public_id: public_id }).select(
			'-_id -password',
		)
		if (user) {
			res.status(200).json(user)
		}
		res.status(404).json({ message: 'user not found' })
	} catch (error) {
		res.status(404)
	}
}

module.exports = { signup, signin, profile, update }
