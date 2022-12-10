const { getDb, ObjectId } = require("../config/mongo");

class User {
  static getCollection() {
    return getDb().collection("user");
  }

  static async findAll() {
    try {
      const collection = this.getCollection();
      return await collection.find().toArray();
    } catch (err) {
      return err;
    }
  }
}

module.exports = User;
