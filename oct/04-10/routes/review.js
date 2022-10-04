import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  res.send("ok");
});

router.get("/:userId", async (req, res) => {
  res.send("ok");
});

export default router;
