const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();
router.get("/questions", controller.getQuestions);
router.post("/questions", controller.insertQuestions);
router.delete("/questions", controller.dropQuestions);

router.get("/result", controller.getResult);
router.post("/result", controller.storeResult);
router.delete("/result", controller.deleteResult);

module.exports = router;
