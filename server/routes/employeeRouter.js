const Router = require("express");
const router = new Router();
const employeeController = require("../controller/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/sign_up", employeeController.sign_up);
router.post("/sign_in", employeeController.sign_in);
router.get("/auth", authMiddleware, employeeController.check);
router.get("/", employeeController.getAll);
router.get("/:id", employeeController.getOne);
router.put("/edit/", employeeController.changeEmployee);
router.put("/", employeeController.changeStatus);
router.delete("/:id", employeeController.deleteOne);

module.exports = router;