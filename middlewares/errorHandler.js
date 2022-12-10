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
  } else if (err.name == "conflict") {
    status = 409;
    message = err.msg;
  } else if (err.name == "invalid_credentials") {
    status = 401;
    message = "invalid email/password";
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;
