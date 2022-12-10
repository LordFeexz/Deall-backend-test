const errorHandler = (err, req, res, next) => {
  console.log(err);
  let status = 500;
  let message = "Internal Server Error";

  res.status(status).json({ message });
};

module.exports = errorHandler;
