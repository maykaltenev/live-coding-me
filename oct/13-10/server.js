import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from 'passport';

//route imports
import teaRoutes from "./routes/teaRoutes.js";
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import configureJwtStrategy from "./passport-config.js";

//Loads .env file contents into process.env.
dotenv.config();

const app = express();

//allow us to parse json information from http body to req.body
app.use(express.json());
//initialize passport so we can use passport within our express server.
app.use(passport.initialize());
//configure passport to use our function / jwtstrategy
configureJwtStrategy(passport);

//connecting to the database
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

//registering routes
app.use("/api/teas", teaRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

//listening for requests.
app.listen(3000, (req, res) => {
  console.log("Server is listening for HTTP requests on port 3000");
});
