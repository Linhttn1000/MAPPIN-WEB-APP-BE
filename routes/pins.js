const express = require("express");
const router = express.Router();
const Pin = require("../models/pin");

//create a pin

router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete pin
router.delete("/:user", async (req, res) => {
  try {
    const pins = await Pin.findOneAndDelete({
      username: req.params.user, // lấy gt từ giao diện rồi xóa
    });
    res.status(200).json(pins);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
