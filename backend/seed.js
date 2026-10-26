const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const Food = require("./models/Food");
const foods = require("./data/foods");

async function seedFoods() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing. Check your .env file path.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Validate the food data before changing the database.
    for (const food of foods) {
      if (!food.name || !food.category || !food.image) {
        throw new Error(`Invalid food data: ${food.name || "Unknown food"}`);
      }
    }

    // Replace existing food documents with the updated foods.js data.
    await Food.deleteMany({});
    await Food.insertMany(foods);

    console.log(`${foods.length} foods inserted successfully`);

    // Confirm the images saved in MongoDB.
    const savedFoods = await Food.find({}, "name image");

    savedFoods.forEach((food) => {
      console.log(`${food.name}: ${food.image}`);
    });
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedFoods();