const boom = require('@hapi/boom');
const { models } = require('./../../database/database');

class CareerService {
  constructor() {}
  async find() {
    try {
      const career = await models.Career.findAll({
        include: ['planificationCourse']
      });
      return career;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const career = await models.Career.findByPk(id, {
        include: ['planificationCourse']
      });
      if (!career) {
        throw boom.notFound('Career not found');
      } else {
        return career;
      }
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      const newCareer = await models.Career.create(data);
      return newCareer;
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    const career = await models.Career.findByPk(id);
    if (!career) {
      throw boom.notFound('Career not exist for updated');
    }
    const response = career.update(changes);
    return response;
  }
  async deletebyId(id) {
    try {
      const careerId = await models.Career.findByPk(id);
      if (!careerId) {
        throw boom.notFound('Career not found or delete');
      } else {
        await careerId.destroy();
      }
      return { id };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CareerService;
