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

  static async getUser(req, res, next) {
    try {
      const id = req.params.id;

      let user = await User.findByPk(id);

      if (!user) throw { name: "data not found" };

      delete user.password;

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
