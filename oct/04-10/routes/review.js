import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await Review.create({
    film: req.body.film,
    reviewBody: req.body.review,
    user: req.body.user,
  });

  res.send("ok");
});

// get all the reviews from the collection
router.get("/all", async (req, res) => {
  res.send("ok");
});

// get all the reviews based on reviewId
router.get("/:reviewId", async (req, res) => {
  const review = await Review.findById(req.params.reviewId).populate("user");

  res.send(review);
});

export default router;
