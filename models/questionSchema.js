const mongoose = require("mongoose");
const questionModel = new mongoose.Schema({
  questions: {
    type: Array,
    default: [],
    index: true,
  },
  answers: {
    type: Array,
    default: [],
  },
});

const Questions = mongoose.model("Question", questionModel);
module.exports = Questions;
