const mongoose = require("mongoose");
const { Schema } = mongoose;

const resultModel = new Schema({
  username: {
    type: String,
  },
  result: {
    type: Array,
    default: [],
  },
  attempts: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  achieved: {
    type: String,
    default: "",
  },
  time: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

const Results = mongoose.model("result", resultModel);
module.exports = Results;
