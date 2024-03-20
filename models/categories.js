const mongoose = require("mongoose");
const dataTable = mongoose.model(
  "dataTable",
  new mongoose.Schema({}),
  "dataTable"
);
module.exports = dataTable;

// const schema = new mongoose.Schema({
//   name: String,
//   imgpath: String,
//   products: Array,
// });

// module.exports = mongoose.model("categories", schema);
