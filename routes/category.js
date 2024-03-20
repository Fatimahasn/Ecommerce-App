const express = require("express");
const router = express.Router();
const dataTable = require("../models/categories");

// Get all posts
router.get("/getData", async (req, res) => {
  const data = await dataTable.find();
  console.log(data);
  res.send(data);
});

// // Get all posts
// router.get("/getCategories", async (req, res) => {
//   const categories = await category.find();
//   console.log(categories);
//   res.send(categories[0].name);
// });

module.exports = router;
