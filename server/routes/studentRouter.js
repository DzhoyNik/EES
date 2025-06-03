const Router = require("express");
const studentController = require("../controller/studentController");
const authStudentMiddleware = require("../middleware/authStudentMiddleware");
const router = new Router();

router.post("/sign_up", studentController.sign_up);
router.post("/sign_in", studentController.sign_in);
router.get("/auth", authStudentMiddleware, studentController.check);
router.get("/:id", studentController.getOne);
router.delete("/", (req, res) => {
    res.send("Good!!");
});

module.exports = router;