const Controller = require("../controllers/auth");
const authentication = require("../middlewares/authentication");
const authorize = require("../middlewares/authorize");
const userRouter = require("./userRouter");
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs.json");

router.post("/register", authentication, authorize, Controller.register);

router.post("/login", Controller.login);

router.use("/users", userRouter);

router.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

module.exports = router;
