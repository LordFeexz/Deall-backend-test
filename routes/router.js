const Controller = require("../controllers/auth");
const authentication = require("../middlewares/authentication");
const authorize = require("../middlewares/authorize");
const userRouter = require("./userRouter");
const router = require("express").Router();

router.post("/register", authentication, authorize, Controller.register);

router.post("/login", Controller.login);

router.use("/users", userRouter);

module.exports = router;
