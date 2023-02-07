const express = require('express');
const UserService = require('../../service/authentication/user.service');
//const boom = require('@hapi/boom');
const router = express.Router();
const service = new UserService();

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

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCourse = await service.create(body);
    res.json(newCourse);
  } catch (error) {
    next(error);
  }
});

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
    const user = await service.deletebyId(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: 'Curso fue borrado o no existe ese id' });
    } else {
      res.json({
        user,
        message: 'delete',
        id,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
