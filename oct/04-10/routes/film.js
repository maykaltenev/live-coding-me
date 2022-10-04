import express from "express";
import Film from "../models/Film.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", async (req, res) => {
  await Film.create({
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
    cast: req.body.cast,
    description: req.body.description,
    user: req.body.user,
  });

  res.send("film created");
});

router.patch("/:filmId", async (req, res) => {
  await Film.findByIdAndUpdate(req.params.filmId, {
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
    cast: req.body.cast,
    description: req.body.description,
    $push: { user: req.body.user },
  });

  res.send("film updated");
});

export default router;
