const express = require('express');
const router = express.Router();
const { validateBody, schemas } = require('../utils/validator');
const UsersController = require('../controllers/users');
const passport = require('passport');

//@route    POST /users/register
//@desc     register new user
//@access   PUBLIC
router.post(
  '/register',
  validateBody(schemas.authSchema),
  UsersController.register
);

//@route    POST /users/login
//@desc     login user
//@access   PUBLIC
router.post(
  '/login',
  validateBody(schemas.authSchema),
  passport.authenticate('local', { session: false }),
  UsersController.login
);

//@route    GET /users/auth/google
//@desc     google oauth
//@access   PUBLIC
router.get(
  '/auth/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    session: false
  }),
  UsersController.googleOAuth
);

//@route    GET /users/current_user
//@desc     get current user
//@access   PRIVATE
router.get(
  '/current_user',
  passport.authenticate('jwt', { session: false }),
  UsersController.current_user
);

module.exports = router;
