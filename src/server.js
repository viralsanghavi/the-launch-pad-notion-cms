const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app._router.stack.forEach(function (r) {
//   console.log(r.route);
//   if (r.route && r.route.path) {
//     console.log(r.route.path);
//   }
// });

