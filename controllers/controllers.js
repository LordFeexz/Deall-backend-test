const { compare, hash } = require("../helpers/bcrypt");
const User = require("../models/user");

class Controller {
  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll();

      if (!users || users.length < 1) throw { name: "data not found" };

      if (users.ok) throw { name: "fail auth to db" };

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

  static async deleteUser(req, res, next) {
    try {
      const id = req.params.id;

      const user = await User.destroy(id);

      if (!user.value) throw { name: "data not found" };

      res.status(200).json({ msg: "success delete" });
    } catch (err) {
      next(err);
    }
  }

  static async updateData(req, res, next) {
    try {
      const { name, username, email } = req.body;
      const id = req.params.id;

      const user = await User.update(id, {
        name,
        username,
        email,
      });

      if (!user.acknowledged) throw { name: "failed update" };

      res.status(201).json({ msg: "success update" });
    } catch (err) {
      next(err);
    }
  }

  static async changePassword(req, res, next) {
    try {
      const { _id: id } = req.user;

      const { password, currentPassword } = req.body;

      const user = await User.findByPk(id);

      const validate = compare(currentPassword, user.password);

      if (!validate) throw { name: "invalid password" };

      const updated = await User.update(id, { password: hash(password) });

      if (!updated.acknowledged) throw { name: "failed update" };

      res.status(201).json({ msg: "success change password" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
