const Router = require("express");
const router = new Router();
const newsController = require("../controller/newsController");

router.post("/create", newsController.create);
router.get("/", newsController.getAll);
router.get("/:id", newsController.getOne);
router.delete("/:id", newsController.deleteOne);

module.exports = router;