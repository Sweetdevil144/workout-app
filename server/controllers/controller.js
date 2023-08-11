const Model = require("../models/model");

// get all workouts

// get a single workout

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body; // Fixed this line
  try {
    const workout = await Model.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// delete a workout

// update a workout

module.exports = {
  createWorkout,
};
