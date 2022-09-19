import mongoose from "mongoose";
import { User } from "../models/user.js"
// schema
const user = mongoose.User({
    username: "whale", // JavaScript uses lowercase "string"
    email: "whale@sea.org",
    password: String, // not a good practise!
    age: Number,
    firstname: String,
    lastname: String,
    height: Number,
    country: String,
});

// model


export { User };