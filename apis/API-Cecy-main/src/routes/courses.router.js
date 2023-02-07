const express = require('express');
const passport = require('passport');
const { checkRoles } = require('../middleware/auth/auth.handler');
const CourseService = require('../service/coordinator-career/courses.service');
//const boom = require('@hapi/boom');
const router = express.Router();
const service = new CourseService();

router.get('/', async (req, res, next) => {
  try {
    const courses = await service.find();
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await service.findOne(id);
    res.json(course);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'coordinator_career'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCourse = await service.create(body);
      res.json(newCourse);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const courses = await service.updatebyId(id);
    courses.name = name;
    await courses.save();

    res.json(courses);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const courses = await service.deletebyId(id);
    if (!courses) {
      return res
        .status(404)
        .json({ message: 'Curso fue borrado o no existe ese id' });
    } else {
      res.json({
        courses,
        message: 'delete',
        id,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
