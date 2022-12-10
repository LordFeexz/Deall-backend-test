const User = require("../models/user");

class Controller {
  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll();

      if (!users || users.length < 1) throw { name: "data not found" };

      const result = users.map((el) => {
        delete el.password;
        return el;
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
