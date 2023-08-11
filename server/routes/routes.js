const express = require("express");
const Model = require("../models/model");
const { createWorkout } = require("../controllers/controller");
require("dotenv").config();

const routes = express.Router();

// Get all workout
routes.get("/", (req, res) => {
  res.json({
    message: "Get all workout",
  });
});

// Get a single workout.
routes.get("/:id", (req, res) => {
  res.json({
    message: "Get single workout",
  });
});

// Post a new workout
routes.post("/", async (req, res) => {});

// Delete a workout
routes.delete("/:id", (req, res) => {
  res.json({
    message: "Delete a workout",
  });
});

// Update a workout
routes.post("/:id", (req, res) => {
  res.json({
    message: "Update a new workout",
  });
});

module.exports = routes;
