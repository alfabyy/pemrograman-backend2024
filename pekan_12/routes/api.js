const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/StudentController");

router.get("/students", StudentController.index);

router.get("/students/:id", StudentController.show);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

module.exports = router;