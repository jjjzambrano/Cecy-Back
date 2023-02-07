const express = require('express');
const passport = require('passport');
//const boom = require('@hapi/boom');

const CourseService = require('../service/coordinator-career/courses.service');

const router = express.Router();
const service = new CourseService();

router.get(
  '/my-profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const courses = await service.findByUser(user.sub);
      res.json(courses);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
