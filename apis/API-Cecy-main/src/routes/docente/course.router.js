const express = require('express');
const CourseService = require('../../service/docente/course.service');
const router = express.Router();
const service = new CourseService();
const PlanService = require('../../service/docente/plan.service');
const planService = new PlanService();

router.get('/', async (req, res, next) => {
  try {
    const course = await service.find();
    res.json(course);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planificacion = await service.findOne(id);
    res.json(planificacion);
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
    const newData = req.body;
    const updateData = await service.updatebyId(id, newData);
    res.json(updateData);
  } catch (error) {
    next(error);
  }
});

router.get('/name/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const courses = await service.findByName(name);
    if (!courses) {
      return res
        .status(404)
        .send({ message: 'No se encontró un usuario con ese nombre' });
    }
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const courseId = await service.deletebyId(id);
    if (!courseId) {
      return res
        .status(404)
        .json({ message: 'La planificacion fue borrada o no existe ese id' });
    } else {
      res.json({
        courseId,
        message: 'delete',
        id,
      });
    }
  } catch (error) {
    next(error);
  }
});


// catalogue route


router.get('/catalogue/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const catalogue = await service.findByCatalogue(name);
    res.json(catalogue);
  } catch (error) {
    next(error);
  }
});

router.get('/catalogue/find/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const catalogue = await service.findById(id);
    res.json(catalogue);
  } catch (error) {
    next(error);
  }
});



// career route

router.get('/careers', async (req, res, next) => {
  try {
    const career = await service.findByCareer();
    res.json(career);
  } catch (error) {
    next(error);
  }
});


//get general information


router.put('/generalInformation/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = await planService.updatebyIdGeneralInformation(id, data);
    res.json(updateData);
  } catch (error) {
    next(error);
  }
});

// get curriculum

router.put('/curricularDesign/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = await planService.updatebyIdCurricularDesign(id, data);
    res.json(updateData);
  } catch (error) {
    next(error);
  }
});


// encontrar planificacion  general iformation

router.get('/generalInformation/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planificacion = await planService.getIdGeneralInformation(id);
    res.json(planificacion);
  } catch (error) {
    next(error);
  }
});

// encontrar planificacion  curriculum

router.get('/curricularDesign/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const planificacion = await planService.getIdCurricularDesign(id);
    res.json(planificacion);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
