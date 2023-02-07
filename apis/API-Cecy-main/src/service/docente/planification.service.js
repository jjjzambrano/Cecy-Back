const boom = require('@hapi/boom');
const { models } = require('../../database/database');

class PlanificationService {
  constructor() {}
  async find() {
    try {
      const planification = await models.Planification.findAll();
      return planification;
    } catch (error) {
      return error;
    }
  }
  async create(data) {
    try {
      const newPlanification = await models.Planification.create(data);
      return newPlanification;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const planificationId = await models.planification.findByPk(id);
      if (!planificationId) {
        throw boom.notFound('Planfication not found');
      } else {
        return planificationId;
      }
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    try {
      const planificationId = await models.Planification.findByPk(id);
      if (!planificationId) {
        throw boom.notFound('Planification not exist for updated');
      }
      const res = planificationId.update(changes);
      return res;
    } catch (error) {
      return error;
    }
  }
  async deletebyId(id) {
    try {
      const planificationId = await models.Planification.findByPk(id);
      if (!planificationId) {
        throw boom.notFound('Planfication not found or delete');
      } else {
        await planificationId.destroy();
      }
      return {
        id,
        planificationId,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = PlanificationService;
