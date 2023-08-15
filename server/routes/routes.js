const express = require("express");
const Model = require("../models/model");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/controller");
require("dotenv").config();

const router = express.Router();

// Get all workout
router.get("/", getWorkouts);

// Get a single workout.
router.get("/:id", getWorkout);

// Create a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
