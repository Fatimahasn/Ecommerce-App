const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: Array,
  images: String,
});

module.exports = mongoose.model("categories", schema);
