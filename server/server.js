const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./src/routes/userRouter");
const postRoute = require("./src/routes/postRouter");

const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://admin:admin@movies.ygif1ap.mongodb.net/?retryWrites=true&w=majority&appName=movies')
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

app.use(express.json());
app.use('/api/account', userRoute);
app.use('/api/posts', postRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});
