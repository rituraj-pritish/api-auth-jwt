const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('../config/keys');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

//JSONWEBTOKEN strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: jwtSecret
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);
        if (!user) {
          return done(null, false);
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

//LOCAL strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false);
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);
