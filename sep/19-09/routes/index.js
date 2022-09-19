import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // store data
    User.create({
        username: "whitewhale",
        email: "whitewhale@ocean.org",
        password: "121321",
        age: 59,
        firstname: "Moby2",
        lastname: "Dick2",
        height: 888,
        country: "None",
    });

    // querying data
    const users = await User.find({ height: 888 });
    res.send(users);
});

export { router };