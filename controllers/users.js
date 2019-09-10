const chalk = require('chalk');

module.exports = {
  register: async (req,res,next) => {
    console.log(chalk.yellow('register called'));
  },
  login: async(req,res,next) => {

  }
}