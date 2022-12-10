const Controller = require("../controllers/controllers");
const router = require("express").Router();

router.get("/", Controller.getUsers);

router.get("/:id", Controller.getUser);

router.delete("/:id", Controller.deleteUser);

module.exports = router;
