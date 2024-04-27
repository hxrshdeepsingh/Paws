const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const { v4: uuidv4 } = require('uuid');
dotenv.config()

const signup = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ "message": "User already registered with this email" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 13);
            const uuid = uuidv4();
            const creation = await User.create({
                username: username,
                email: email,
                password: hashedPassword,
                userId: uuid
            });

            const token = jwt.sign({ id: creation._id }, process.env.SECRET_KEY);
            return res.status(201).json({ user: creation, token: token });
        }
    } catch (error) {
        return res.status(500).json({ "message": "Internal server error" });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ "message": "User not found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ "message": "User credentials are invalid" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY);
        return res.status(200).json({ user: existingUser, token: token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Internal server error" });
    }
};

const profile = async (req, res) => {
    const { userId } = req.body;

    try {
        const user = await User.find({ userId: userId }).select('-_id -password');
        if (user) {
            res.status(200).json(user);
        }
        res.status(404).json({ "message": "user not found" })
    } catch (error) {
        res.status(500)
    }
}

module.exports = { signup, signin , profile};