const express = require("express");
const router = express.Router();
const request = require("request-promise");




/* GET users listing. */
router.get("/", function(req, res, next) {
  let options = {
    url: `https://data.calgary.ca/resource/9bze-mzx6.json?year=2018`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    res.status(200).json(data);
  });
});

module.exports = router;