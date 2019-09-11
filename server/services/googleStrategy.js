const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { GOOGLE } = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE.clientID,
      clientSecret: GOOGLE.clientSecret,
      callbackURL: '/users/auth/google/callback',
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        //When already logged in
        //Adding google's data to existing account
        if (req.user) {
          req.user.methods.push('google');
          req.user.google = {
            id: profile.id,
            email: profile.email
          };
          await req.user.save();
          return done(null, req.user);
        }

        const existingUser = await User.findOne({
          'google.id': profile.id
        });
        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await new User({
          methods: ['google'],
          google: {
            id: profile.id,
            email: profile.email
          }
        }).save();

        return done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
