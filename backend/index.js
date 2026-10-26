const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const Food = require("./models/Food");

require("dotenv").config({ path: "../.env" });

const connectToMongo = require("./db");

connectToMongo();
app.use(cors());
app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.get("/", (req, res) => {
    res.send("GoFood Backend Running");
});
app.get("/api/foods", async (req, res) => {
    try {
        const foods = await Food.find();

        res.json(foods);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});