const Questions = require("../models/questionSchema");
const Results = require("../models/resultSchema");
const { questions, answers } = require("../database/data");

async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    console.log("Something went wrong with get req for q");
  }
}

async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions: questions, answers: answers }).then(
      function () {
        res.json("Successfully saved defult items to DB");
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json(error);
  }
}
async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not provided");
    Results.create({ username, result, attempts, points, achieved }).then(
      function () {
        res.json({ msg: "result saved successfuly" });
      }
    );
  } catch (error) {
    res.json(error);
  }
}

async function deleteDup(req,res){
  try{
    const duplicates = await Results.aggregate([
      { $group: { _id: "$username", count: { $sum: 1 }, docs: { $push: "$_id" } } },
      { $match: { count: { $gt: 1 } } }
    ]);
    const idsToDelete = duplicates.flatMap(duplicate => duplicate.docs.slice(1)); 
    await Results.deleteMany({ _id: { $in: idsToDelete } });
    res.json({ message: "Duplicates deleted successfully." });
    
  }catch (error) {
    res.json(" there is an error  "+ error);
  }
}

module.exports = {
  getQuestions,
  insertQuestions,
  getResult,
  deleteDup,
  storeResult,
};
