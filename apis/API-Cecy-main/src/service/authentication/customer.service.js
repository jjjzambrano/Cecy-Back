const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('./../../database/database');
class CustomerService {
  constructor() {}

  async find() {
    try {
      return await models.Customer.findAll({
        include: ['user'],
      });
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      const hash = await bcrypt.hash(data.user.password, 10);
      const newData = {
        ...data,
        user: {
          ...data.user,
          password: hash,
        },
      };
      const newCustomer = await models.Customer.create(newData, {
        include: ['user'],
      });
      delete newCustomer.user.dataValues.password;
      delete newCustomer.user.dataValues.recoveryToken;

      return newCustomer;
    } catch (error) {
      return error;
    }
  }

  async findOne(id) {
    try {
      const customerId = await models.Customer.findByPk(id);
      if (!customerId) {
        throw boom.notFound('Customer not found');
      } else {
        return customerId;
      }
    } catch (error) {
      return error;
    }
  }

  async update(id, changes) {
    try {
      const customerId = await models.Customer.findByPk(id);
      const response = await customerId.update(changes);
      return {
        id,
        response,
      };
    } catch (error) {
      return error;
    }
  }

  async deleteById(id) {
    try {
      const customerId = await models.Customer.findByPk(id);
      if (!customerId) {
        throw boom.notFound('Customer not found or delete');
      } else {
        await customerId.destroy();
      }
      return {
        id,
        customerId,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CustomerService;
