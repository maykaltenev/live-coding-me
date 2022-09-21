import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    firstname: String,
    lastname: String,
    height: Number,
    country: String,
});

const User = mongoose.model("User", userSchema);

export default User;