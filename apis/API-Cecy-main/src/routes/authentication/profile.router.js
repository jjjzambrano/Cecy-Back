const express = require('express');
const passport = require('passport');

const CourseService = require('../../service/coordinator-career/courses.service');

const router = express.Router();
const service = new CourseService();
router.get(
  '/my-courses',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const coursesByUser = await service.findByUser(user.sub);
      console.log(coursesByUser);
      res.json(coursesByUser)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
