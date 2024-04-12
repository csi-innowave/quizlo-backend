// In getQuestions.js
async function getQuestions(req, res) {
  res.json("questions get api req");
}

async function insertQuestions(req, res) {
  res.json("insert questions");
}

module.exports = {
  getQuestions,
  insertQuestions,
};
