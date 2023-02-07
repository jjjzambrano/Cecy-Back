const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../../database/database');

class CourseService {
  constructor() {}
  async find() {
    try {
      const course = await models.Course.findAll();
      return course;
    } catch (error) {
      return error;
    }
  }
  async create(data) {
    try {
      const newCourse = await models.Course.create(data);
      return newCourse;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const courseId = await models.Course.findByPk(id);
      if (!courseId) {
        throw boom.notFound('Planfication not found');
      } else {
        return courseId;
      }
    } catch (error) {
      return error;
    }
  }
  async findByName(name) {
    try {
      const courses = await models.Course.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      return courses;
    } catch (error) {
      return false;
    }
  }

  async updatebyId(id, changes) {
    try {
      // console.log(changes)
      await models.Course.update(changes, { where: { id } });
      const courseUpdate = await models.Course.findByPk(id);
      return courseUpdate;
    } catch (error) {
      return error;
    }
  }

  // try {
  //   await Usuario.update(nuevosDatos, { where: { id } });
  //   return true;
  // } catch (error) {
  //   return false;
  // }
  async deletebyId(id) {
    try {
      const courseId = await models.Course.findByPk(id);
      if (!courseId) {
        throw boom.notFound('Planfication not found or delete');
      } else {
        await courseId.destroy();
      }
      return {
        id,
        courseId,
      };
    } catch (error) {
      return error;
    }
  }

  // catalogue bro

  async findByCatalogue(fieldCatalogue) {
    try {
      const catalogue = await models.Catalogue.findAll({
        where: { type: fieldCatalogue },
      });
      return catalogue;
    } catch (error) {
      return null;
    }
  }

  async findById(id) {
    try {
      const catalogue = await models.Catalogue.findByPk(id);
      return catalogue;
    } catch (error) {
      return null;
    }
  }

  //career

  async findByCareer() {
    try {
      const career = await models.Career.findAll();
      return career;
    } catch (error) {
      return null;
    }
  }
}

module.exports = CourseService;
