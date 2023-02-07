const express = require('express');
const CustomerService = require('../../service/authentication/customer.service');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customer = await service.find();
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCustomer = await service.create(body);
    res.json({
      newCustomer,
      message: 'Usuario fue creado con exito',
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const customers = await service.update(id, body);
    res.json({
      customers,
      message: 'Usuario fue actualizado con éxito'
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerId = await service.deleteById(id);
    if (!customerId)
      return res
        .status(404)
        .json({ message: 'Cliente fue borrado o no existe ese id' });
    res.json({
      customerId,
      message: 'Usuario fue borrado con éxito',
      id,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
