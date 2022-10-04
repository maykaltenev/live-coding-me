import mongoose from "mongoose";

// one to many relationship
const reviewSchema = new mongoose.Schema({
  film: String,
  reviewBody: String,
  createdOn: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Review = mongoose.model("reviews", reviewSchema);

export default Review;
