const express = require("express");
const router = express.Router();
const {createTrip} = require("../controller/tripController");

router.post("/createTrip", createTrip);

module.exports = router;
