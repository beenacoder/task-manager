const { validationResult } = require('express-validator');
const CustomError = require('../utils/customError');

const validateTasks = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(err => err.msg);
    return next(new CustomError(400, messages.join(', ')));
  }
  next();
};

module.exports = { validateTasks };
