const express = require('express');
const PlanificationCoursesService = require('../../service/coordinator-career/planification.courses.service');

const router = express.Router();
const service = new PlanificationCoursesService();

router.get('/', async (req, res, next) => {
  try {
    const planificationCourse = await service.find();
    res.json(planificationCourse);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planificationCourse = await service.findOne(id);
    res.json(planificationCourse);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newPlanificationCourse = await service.create(body);
    res.json({
      newPlanificationCourse,
      message: 'Planificacion del curso fue creada con éxito',
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const planificationCourse = await service.updatebyId(id, body);
    res.json({
      planificationCourse,
      message: 'Planificación del curso fue actualizada con éxito'
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const { state } = req.body;
    const planificationCourse = await service.updateApproveCourse(id, state)
    res.json(planificationCourse)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planificationCourseId = await service.deletebyId(id);
    if (!planificationCourseId)
      return res
        .status(404)
        .json({ message: 'Planificación del curso fue borrado o no existe ese id' });
    res.json({
      planificationCourseId,
      message: 'Planificacion del curso fue borrado con éxito',
      id,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
