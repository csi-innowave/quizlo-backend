// In getQuestions.js
async function getQuestions(req, res) {
  res.json("questions get api req");
}

async function insertQuestions(req, res) {
  res.json("insert questions");
}
async function dropQuestions(req, res) {
  res.json("Dropped all qs");
}
async function getResult(req, res) {
  res.json("result api got rep ");
}
async function storeResult(req, res) {
  res.json("result api post req");
}
async function deleteResult(req, res) {
  res.json("result got deleted req");
}

module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  deleteResult,
};
