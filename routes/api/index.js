const router = require("express").Router();
const hourRoutes = require("./hours");
const auth = require("./auth");

// Hour routes
router.use("/hours", hourRoutes);

router.use("/auth", auth);

module.exports = router;
