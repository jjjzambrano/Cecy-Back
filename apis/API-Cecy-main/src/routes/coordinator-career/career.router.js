const express = require('express');
const CareerService = require('../../service/coordinator-career/careers.service');

const router = express.Router();
const service = new CareerService();

router.get('/', async (req, res, next) => {
  try {
    const career = await service.find();
    res.json(career);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const career = await service.findOne(id);
    res.json(career);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCareer = await service.create(body);
    res.json({
      newCareer,
      message: 'La carrera fue creada con éxito',
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const career = await service.updatebyId(id, body);
    res.json({
      career,
      message: 'La carrera fue actualizada con éxito'
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const careerId = await service.deletebyId(id);
    if (!careerId)
      return res
        .status(404)
        .json({ message: 'La carrera fue borrada o no existe ese id' });
    res.json({
      careerId,
      message: 'La carrera fue  borrado con éxito',
      id,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
