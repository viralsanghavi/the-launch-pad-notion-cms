// routes/endpoint1.js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const {getAllPages} = await import("../../utils.mjs");

  try {
    // if (!req.query?.page_id) {
    //   res.send({
    //     message: "Page id missing",
    //   });
    // }
    const response = await getAllPages();
    res.send({
      message: "Success",
      data: {
        ...response,
        results: response?.results.filter(({public_url}) => !!public_url),
      },
    });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
