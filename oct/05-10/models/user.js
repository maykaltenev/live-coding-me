import e from 'express';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    dataCreated: { type: Date, required: true, default: Date.now },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
})

const User = model('User', userSchema);
export default User;