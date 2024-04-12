const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./router/route");
const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT;

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log("connected");
});
