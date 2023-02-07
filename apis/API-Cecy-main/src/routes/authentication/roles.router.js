const express = require('express');
const RolesService = require('../../service/authentication/roles.service');
//const boom = require('@hapi/boom');
const router = express.Router();
const service = new RolesService();

router.get('/', async (req, res, next) => {
  try {
    const roles = await service.find();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const roles = await service.findOne(id);
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newRole = await service.create(body);
    res.json(newRole);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const roles = await service.updatebyId(id);
    roles.name = name;
    await roles.save();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const roles = await service.deletebyId(id);
    if (!roles) {
      return res
        .status(404)
        .json({ message: 'Rol fue borrado o no existe ese id' });
    } else {
      res.json({
        roles,
        message: 'delete',
        id,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
