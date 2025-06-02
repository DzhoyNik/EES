const Router = require("express");
const router = new Router();

router.post("/sign_up", (req, res) => {
    res.send("Good");
});
router.post("/sign_in", (req, res) => {
    res.send("Good!");
});
router.get("/auth", (req, res) => {
    res.json({ message: "Test!!!" });
});
router.delete("/", (req, res) => {
    res.send("Good!!");
});

module.exports = router;