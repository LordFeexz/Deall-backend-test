const { getDb, ObjectId } = require("../config/mongo");

class User {
  static getCollection() {
    return getDb().collection("user");
  }

  static async findAll() {
    try {
      return await this.getCollection().find().toArray();
    } catch (err) {
      return err;
    }
  }

  static async findOne(data) {
    try {
      return await this.getCollection().findOne(data);
    } catch (err) {
      return err;
    }
  }

  static async findByPk(data) {
    try {
      return await this.getCollection().findOne({ _id: ObjectId(data) });
    } catch (err) {
      return err;
    }
  }
}

module.exports = User;
