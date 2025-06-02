const Router = require("express");
const themeController = require("../controller/themeController");
const router = new Router();

router.get("/:id", themeController.getAll)
router.put("/:id", themeController.update)
router.delete("/:id", themeController.delete)

module.exports = router;