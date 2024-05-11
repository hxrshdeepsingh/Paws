const router = require("express").Router();
const { signup, signin, profile } = require("../controllers/userControllers");

router.post("/signup",  signup)
router.post("/signin",  signin)
router.get("/profile",  profile)

module.exports = router;