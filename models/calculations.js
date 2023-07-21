const mongoose = require("mongoose");

const CalculationsSchema = new mongoose.Schema(
  {
    num1: {
      type: Number,
      required: true,
    },
    num2: {
      type: Number,
      required: true,
    },
    operator: {
      type: String,
      required: true,
    },
    
    result: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calculations", CalculationsSchema);
