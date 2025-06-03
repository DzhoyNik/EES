const Router = require("express");
const router = new Router();
const courseController = require("../controller/courseController");

router.post("/", courseController.create);
router.post("/theme", courseController.createTheme);
router.get("/", courseController.getAll);
router.get("/:id", courseController.getOne);
router.delete("/:id", courseController.delete);

module.exports = router;