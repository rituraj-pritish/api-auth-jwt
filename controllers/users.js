const chalk = require('chalk');
const {validationResult} = require('express-validator');

module.exports = {
  register: async (req,res,next) => {
    try {

      console.log(chalk.yellow(JSON.stringify(req.body)));
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
        return;
      }
    } catch (err) {
      return next(err);
    }
  },

  login: async(req,res,next) => {

  }
}