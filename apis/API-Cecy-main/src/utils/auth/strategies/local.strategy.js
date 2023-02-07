const { Strategy } = require('passport-local').Strategy;
const AuthService = require('../../../service/authentication/auth.service');

/* const { encryptPassword } = require('../../helpers/helpers'); */
const service = new AuthService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      console.log('Se esta autenticando:', user);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

/* passport.serializeUser((user, done) => {

}) */

module.exports = LocalStrategy;
