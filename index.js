const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/category");
// const imgroutes = require("./routes/image");
const cors = require("cors");
// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/CMart").then(() => {
  const app = express();
  app.use(cors());
  app.use("/home", routes);

  // Serve static images
  app.use("/images", express.static("images"));
  app.listen(3000, () => {
    console.log("Server has started!");
  });
});
