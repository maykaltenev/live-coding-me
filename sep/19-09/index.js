import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Here we connect to our database

/*try {
  await mongoose.connect(
    process.env.MONGODB_URL
  );
  console.log("Database connected! 😃");
} catch (error) {
  console.log(error.message);
  console.log("🤨");
}*/

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});