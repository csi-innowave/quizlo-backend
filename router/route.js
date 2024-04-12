const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();
router.get("/questions", controller.getQuestions);
router.post("/questions", controller.insertQuestions);

module.exports = router;
