const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);

        console.log("MongoDB connected");

        const fetched_data = await mongoose.connection.db
            .collection("foods")
            .find({})
            .toArray();

        global.food = fetched_data;

        console.log("Food data fetched");
    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
};

module.exports = connectToMongo;