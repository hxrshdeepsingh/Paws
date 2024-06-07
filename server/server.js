const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://paws-xi.vercel.app/'],
		credentials: true,
	}),
)
// app.use(cors({ credentials: true }));

const userRoute = require('./src/routes/userRouter')
const postRoute = require('./src/routes/postRouter')

const mongoose = require('mongoose')
mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log('DB connected')
	})
	.catch((err) => {
		console.error('Failed to connect to MongoDB:', err)
		process.exit(1)
	})

app.use(express.json())
app.use('/api/account', userRoute)
app.use('/api/posts', postRoute)

app.listen(process.env.PORT, () => {
	console.log('Server is running!')
})
