const errorHandler = (err, req, res, next) => {
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
  } else if (err.name == "invalid input") {
    status = 400;
    message = err.name;
  } else if (err.name == "invalid token") {
    status = 401;
    message = err.name;
  } else if (err.name == "Forbidden") {
    status = 403;
    message = err.name;
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;
