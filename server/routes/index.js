const Router = require("express");
const router = new Router();
const employeeRouter = require("./employeeRouter");
const studentRouter = require("./studentRouter");
const courseRouter = require("./courseRouter");
const moduleRouter = require("./moduleRouter");
const themeRouter = require("./themeRouter");
const newsRouter = require("./newsRouter");

router.use("/employee", employeeRouter);
router.use("/student", studentRouter);
router.use("/courses", courseRouter);
router.use("/module", moduleRouter);
router.use("/theme", themeRouter);
router.use("/news", newsRouter);

module.exports = router;