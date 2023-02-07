const boom = require('@hapi/boom');
const { models } = require('./../../database/database');

class TeacherService {
  constructor() {}
  async find() {
    try {
      const teacher = await models.Teacher.findAll();
      return teacher;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const teacher = await models.Teacher.findByPk(id, {
        include: ['planificationCourse'],
      });
      if (!teacher) {
        throw boom.notFound('Teacher not found');
      } else {
        return teacher;
      }
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      const newTeacher = await models.Teacher.create(data);
      return newTeacher;
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    const teacher = await models.Teacher.findByPk(id);
    if (!teacher) {
      throw boom.notFound('Teacher not exist for updated');
    }
    const response = teacher.update(changes);
    return response;
  }
  async deletebyId(id) {
    try {
      const teacherId = await models.Course.findByPk(id);
      if (!teacherId) {
        throw boom.notFound('Teacher not found or delete');
      } else {
        await teacherId.destroy();
      }
      return { id };
    } catch (error) {
      return error;
    }
  }
}

module.exports = TeacherService;
