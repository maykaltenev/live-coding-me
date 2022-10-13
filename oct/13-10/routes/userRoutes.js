import express from 'express';

import { getAllUsers, registerUser, login } from '../controllers/userController.js'
const router = express.Router();

//GET::
//http://localhost:3000/api/users/
router.get('/', getAllUsers)

//POST::
//http://localhost:3000/api/users/create
//BODY
// {
// 	"firstName":"Brandon",
// 	"lastName":"Test",
// 	"userName":"Brandon123",
// 	"email":"brandon.test@test.com"
// }
router.post('/create', registerUser);
router.post('/login', login)
export default router;