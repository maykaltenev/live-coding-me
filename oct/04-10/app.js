import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import reviewRouter from "./routes/review.js";
import filmRouter from "./routes/film.js";

dotenv.config();

// connect to our database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/film", filmRouter);

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
