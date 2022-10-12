import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const todoSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    text:{type:String, required:true}, 
    done:{type:Boolean, default:false},
    expiryDate:{type:Date, required:false} 
});

const Todo = model('Todo', todoSchema);

export default Todo;