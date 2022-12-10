const Controller = require("../controllers/controllers");

const router = require("express").Router();

router.get("/", Controller.getUsers);

module.exports = router;
