import express from "express";
import Order from "../models/oder.js";

const router = express.Router();

//GET:: list of all orders
router.get('/', async (req, res) => {
    const orders = await Order.find().populate('user');
    return res.status(200).json(orders);
})

router.get('/byuser/:userid', async (req, res) => {
    const orders = await Order.find({ user: req.params.userid }).populate('user');
    return res.status(200).json(orders);
})

//POST:: create new order
router.post('/create', async (req, res) => {
    try {
        const createdOrder = await Order.create({
            orderDescription: req.body.orderDescription,
            totalPrice: req.body.totalPrice,
            vat: req.body.vat,
            totalPriceInclVat: req.body.totalPriceInclVat,
            user: req.body.userID //we post the user ID, this is a reference to the user document
        });
        return res.status(200).json({ message: 'Order was created', createdOrder });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;