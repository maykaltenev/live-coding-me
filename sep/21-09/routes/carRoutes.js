import express from 'express';
import Car from '../models/car.js';
const router = express.Router();

router.post('/create', async (req, res) => {
    const car = await Car.create(req.body);
    return res.status(200).json(car);
})
export default router;