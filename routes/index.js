const express = require("express");
const router = express.Router();

const { showInfo } = require("../controller/weather.controller");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { data: {} });
});
router.get("/weather-forecast", async (req, res, next) => {
  try {
    let a = req.query.address;
    let address = a.toString();
    console.log(address);
    let data = await showInfo(address);
    return res.render("index", { data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
