const Controller = require("../controllers/controllers");
const authentication = require("../middlewares/authentication");
const authorize = require("../middlewares/authorize");
const router = require("express").Router();

router.get("/", Controller.getUsers);

router.get("/:id", Controller.getUser);

router.use(authentication);

router.use(authorize);

router.delete("/:id", Controller.deleteUser);

router.put("/:id", Controller.updateData);

module.exports = router;
