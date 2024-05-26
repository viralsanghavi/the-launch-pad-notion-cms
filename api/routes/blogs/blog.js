// routes/endpoint1.js
const express = require("express");
// const {getPageBlock} = require("../../utils.mjs");
const router = express.Router();

router.get("/", async (req, res) => {
  const {getPageBlock} = await import("../../utils.mjs");

  try {
    if (!req.query?.page_id) {
      res.send({
        message: "Page id missing",
      });
    }
    const response = await getPageBlock(req.query?.page_id);
    res.send({message: "Success", data: response});
  } catch (error) {
    throw error;
  }
});

module.exports = router;
