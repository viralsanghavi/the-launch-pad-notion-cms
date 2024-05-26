// routes/index.js
const express = require("express");
const router = express.Router();

router.use("/all", require("./blogs/all"));
router.use("/blog", require("./blogs/blog"));

module.exports = router;
