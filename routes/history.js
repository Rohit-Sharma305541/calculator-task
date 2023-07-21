const express = require("express");
const router = express.Router();
const Calculations = require("../models/calculations");

router.get("/", async (req, res) => {
  try {
    const hist = await Calculations.find({},{result:1}); 

    res.status(200).json(hist); 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
