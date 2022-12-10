const Controller = require("../controllers/auth");
const userRouter = require("./userRouter");
const router = require("express").Router();

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.use("/users", userRouter);

module.exports = router;
