const Model = require("../models/model");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Model.find({}).sort({ createdAt: -1 });
  try {
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    let foundWorkout = null;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
    // find the workout with that specific _id and return it to user as json object in response body
    else foundWorkout = await WorkoutModel.findById(id);
    if (!foundWorkout) throw new Error("Workout not found");
    res.status(200).json(foundWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body; // Fixed this line
  try {
    const workout = await Model.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a workout by its given id value
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
    else {
      const deleted = await Model.findByIdAndDelete(id);
      if (!deleted) throw new Error("Workout not found");
      res.status(200).json(deleted);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, load, reps } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid ID");
    else {
      const updated = await Model.findOneAndUpdate(
        { _id: id },
        { title, load, reps },
        { new: true }
      );
      if (!updated) throw new Error("Workout not found");
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
