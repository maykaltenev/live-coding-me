import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  res.send("ok");
});

router.get("/:userId", async (req, res) => {
  res.send("ok");
});

export default router;
