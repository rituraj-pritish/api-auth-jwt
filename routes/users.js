const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users')

//@route    POST /users/register
//@desc     register new user
//@access   PUBLIC
router.post('/register',UsersController.register);

//@route    POST /users/login
//@desc     login new user
//@access   PUBLIC
router.post('/login').post(UsersController.login);

module.exports = router;