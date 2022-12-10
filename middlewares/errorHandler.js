const errorHandler = (err, req, res, next) => {
  console.log(err);
  let status = 500;
  let message = "Internal Server Error";

  if (err == "MongoServerSelectionError") {
    status = 408;
    message = "Connection Error";
  } else if (err.name == "data not found") {
    status = 404;
    message = err.name;
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;
