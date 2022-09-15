import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    return res.status(200).send("Welcome to the validatorRoutes");
})

router.post('/validateuser', (req, res) => {
    const { firstname, lastname, email } = req.body;

    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email
    };

    return res.status(200).json({ user: user });
})


export default router;