const express = require('express');
const passport = require('passport');

const planificationCourseService = require('../../service/coordinator-career/planification.courses.service');

const router = express.Router();
const service = new planificationCourseService();
router.get(
  '/my',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const planificationByUser = await service.findByUser(user.sub);
      console.log(planificationByUser);
      res.json(planificationByUser)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
