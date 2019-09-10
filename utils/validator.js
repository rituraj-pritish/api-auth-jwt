const { check } = require('express-validator');

module.exports = validate = method => {
  switch (method) {
    case 'register':
      return [
        check('name', 'Name is required').exists(),
        check('email', 'Invalid Email')
          .exists()
          .isEmail(),
        check(
          'password',
          'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
      ];
  }
};
