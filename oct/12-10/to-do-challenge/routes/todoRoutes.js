import express from 'express';
import Todo from '../models/todo.js';

const router = express.Router();

//GET: get a list of todos 
router.get('/list', async (req, res) => {
    const todos = await Todo.find();

    return res.status(200).json({message:'list of todos', todos})
});

//POST: create a todo 
router.post('/create', async (req, res)=> {
    try {
        const createdTodo = await Todo.create({
            text:req.body.text
        });

        return res.status(201).json({message:'Todo created', createdTodo})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
});

//PATCH: mark a todo as done
router.patch('/done/:id',async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,{
            done:true
        },{new:true})

        return res.status(200).json({message:'Todo marked done', updatedTodo});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})


export default router;