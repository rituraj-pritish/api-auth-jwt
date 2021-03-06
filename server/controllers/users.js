const chalk = require('chalk');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../config/keys');
const jwt = require('jsonwebtoken');

signToken = user => {
  return jwt.sign(
    {
      iss: 'auth-api', //optional
      sub: user.id
    },
    jwtSecret,
    { expiresIn: 60 * 60 * 60 }
  );
};

module.exports = {
  register: async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ 'local.email': email });
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      const user = new User({
        methods: ['local'],
        name: name,
        local: {
          email: email,
          password: password
        }
      });

      const salt = await bcrypt.genSalt(10);
      user.local.password = await bcrypt.hash(password, salt);

      await user.save();

      const token = signToken(user);

      res.status(200).json({ token });
    } catch (err) {
      return next(err);
    }
  },

  login: async (req, res, next) => {
    const token = signToken(req.user);
    res.json({ token });
  },

  current_user: async (req, res, next) => {
    res.send(req.user);
  },

  logout: async (req, res, next) => {
    req.logout();
    res.send('logged out');
  },

  googleOAuth: async (req, res, next) => {
    //generate token
    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });

    const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('JWT_TOKEN', '${token}');
        // Redirect browser to root of application
        window.location.href = '/success-redirect';
      </script>
    </html>
    `;

    // res.json({token});
    res.send(htmlWithEmbeddedJWT);
  }
};
