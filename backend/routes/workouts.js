const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

//CRUD OPERATIONS
//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new workout" });
});

//UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

//so we can use these routes outside of this file.
module.exports = router;
