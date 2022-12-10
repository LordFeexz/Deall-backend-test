const authorize = async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== "admin") throw { name: "Forbidden" };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorize;
