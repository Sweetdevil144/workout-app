const express = require("express");
require("dotenv").config();
//express app
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes.js");

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/routes", routes);

// Connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("Connected to the db");
    //Listen on PORT
    app.listen(process.env.PORT, () => {
      console.log(`Running on http://localhost:8000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
