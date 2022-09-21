import express from 'express';
import User from './../models/user.js'
const router = express.Router();

router.post('/create', async (req, res) => {
    const { username, email, password, age, firstname, lastname, height, country } = req.body;

    const user = await User.create({
        username: username,
        email: email,
        password: password,
        age: age,
        firstname: firstname,
        lastname: lastname,
        height: height,
        country: country,
    });

    //creating a user 
    return res.status(200).json({ message: 'User Created', user })
});
router.get('/', async (req, res) => {
    //getting users from user collection
    const users = await User.find();
    //return that information to the client
    return res.status(200).json(users);
});

export default router;