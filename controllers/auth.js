const { hash } = require("../helpers/bcrypt");
const User = require("../models/user");

class Controller {
  static async register(req, res, next) {
    try {
      const { name, username, email, password, role } = req.body;

      const user = await User.findOne({ email });

      if (user || user !== null) throw { name: "conflict" };

      await User.create({
        name,
        username,
        email,
        password: hash(password),
        role,
      });

      res.status(201).json({ msg: "success register" });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
