const express = require('express');
const TeacherService = require('../../service/coordinator-career/teachers.service');

const router = express.Router();
const service = new TeacherService();

router.get('/', async (req, res, next) => {
  try {
    const teacher = await service.find();
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await service.findOne(id);
    res.json(teacher);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newTeacher = await service.create(body);
    res.json({
      newTeacher,
      message: 'El docente fue creado con éxito',
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const teacher = await service.updatebyId(id, body);
    res.json({
      teacher,
      message: 'El docente fue actualizado con éxito',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacherId = await service.deletebyId(id);
    if (!teacherId)
      return res
        .status(404)
        .json({ message: 'El docente fue borrado o no existe ese id' });
    res.json({
      teacherId,
      message: 'El docente fue  borrado con éxito',
      id,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
