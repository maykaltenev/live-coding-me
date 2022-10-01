import express from "express";
import { logging, loggingtime } from '../middleware/logging.js'
const router = express.Router();

router.get('/', logging, loggingtime, (req, res) => {
    return res.status(200).json("Hello from the user routes")
});
export default router;