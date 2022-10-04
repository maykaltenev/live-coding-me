import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  film: String,
  reviewBody: String,
  createdOn: Date,
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
