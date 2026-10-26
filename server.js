const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Food = require("./models/Food");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });

// GET all foods
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a food
app.post("/api/foods", async (req, res) => {
  try {
    const food = new Food(req.body);
    const savedFood = await food.save();

    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});