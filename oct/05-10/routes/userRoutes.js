import express from "express";
import User from '../models/user.js'
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
})
router.post('/create', async (req, res) => {
    try {
        const createdUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
        });
        return res.status(200).json({ message: "User created", createdUser })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

export default router;