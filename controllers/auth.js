const { hash, compare } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const User = require("../models/user");

class Controller {
  static async register(req, res, next) {
    try {
      const { name, username, email, password, role } = req.body;

      const user = await User.findOne({ email });

      if (user || user !== null)
        throw { name: "conflict", msg: "email is already use" };

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
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) throw { name: "invalid_credentials" };

      const validate = compare(password, user.password);

      if (!validate) throw { name: "invalid_credentials" };

      const payload = {
        email: user.email,
        username: user.username,
        role: user.role,
      };

      const access_token = createToken(payload);

      res.status(200).json(access_token);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
