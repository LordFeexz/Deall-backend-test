const Controller = require("../controllers/controllers");

const router = require("express").Router();

router.get("/", Controller.getUsers);

router.get("/:id", Controller.getUser);

module.exports = router;
