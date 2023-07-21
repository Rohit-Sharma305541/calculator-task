const Calculations = require("../models/calculations");
const router = require("express").Router();

router.route("/").post(async (req, res) => {
  try {
    const { n1, n2 } = req.body;
    console.log(typeof n1);
    if (typeof n1 === "number" && typeof n2 === "number" && n2 != 0) {
      let result = n1 / n2;
      const calc = new Calculations({
        num1: n1,
        num2: n2,
        operator: "/",
        result: `${n1} / ${n2} = ${result}`,
      });

      await calc.save();
      res.status(200).json({ result });
    } else {
      res.status(400).json({ error: "Invalid Input" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
