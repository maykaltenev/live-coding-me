import User from './../models/user.js';
import bcrypt from 'bcrypt';
import authenticationHelper from '../helpers/authenticationHelper.js';


export const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
}
export const login = async (req, res) => {
    //email and password 
    const { email, password } = req.body;
    try {
        //check if there is a password? 
        if (!password) {
            return res.status(400).json({ mesage: 'No password supplied' })
        }
        //check if a user with that email address exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: 'No user found' })
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
            console.log("Yaay we're authenticated");
            //generate a token for the user using the authentication helpre
            const token = await authenticationHelper.generateToken(user);
            return res.status(200).json({ message: 'You are authenticated, welcome!', token })
        } else {
            return res.status(400).json({ message: 'No access granted' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const registerUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try {
        //creating the user document into the users collection
        const createdUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        });

        return res.status(200).json({ message: 'User created', createdUser })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}