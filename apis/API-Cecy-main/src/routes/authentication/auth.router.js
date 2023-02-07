const express = require('express');
const passport = require('passport');
const router = express.Router();
const boom = require('@hapi/boom');

const AuthService = require('../../service/authentication/auth.service');
const UserService = require('../../service/authentication/user.service');

const service = new AuthService();
const service2 = new UserService();
router.post(
  '/login',
  passport.authenticate('local', {
    session: false,
    //successRedirect: 'profile',
    //failureRedirect: 'signup',
    //failureFlash: true,
  }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const signToken = await service.signToken(user);
      res.json(signToken);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const userProfile = await service2.findByprofile(user.sub);
      if (!userProfile) {
        throw boom.unauthorized();
      } else {
        res.json(userProfile)
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post('/signup', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true,
  });
  console.log(req.body);
  res.send('received');
});

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const sendMail = await service.sendRecovery(email);
    res.json(sendMail);
  } catch (error) {
    next(error);
  }
});

router.post('/change-password', async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const sendMail = await service.changePassword(token, newPassword);
    res.json(sendMail);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
