import mongoose from "mongoose";

// many to many relationship
const filmSchema = new mongoose.Schema({
  name: String,
  year: Number,
  director: String,
  cast: [String],
  description: String,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const Film = mongoose.model("film", filmSchema);

export default Film;
