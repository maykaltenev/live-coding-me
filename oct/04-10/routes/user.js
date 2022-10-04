import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });

  res.send("user created");
});

// get all the users from the collection
router.get("/all", async (req, res) => {
  res.send("ok");
});

// get one single user from the collection
router.get("/:userId", async (req, res) => {
  res.send("ok");
});

export default router;
