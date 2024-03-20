const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/category");
// require("dotenv").config();
const cors = require("cors");

const mongoURL = process.env.DATABASE_URL;

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/CMart");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

// Serve static images
app.use("/images", express.static("images"));
app.listen(3000, () => {
  console.log("Server has started!");
});
