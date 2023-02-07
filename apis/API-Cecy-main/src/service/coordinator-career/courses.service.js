const boom = require('@hapi/boom');
const { models } = require('./../../database/database');

class CourseService {
  CourseService() {}
  async find() {
    try {
      return await models.Course.findAll({ include: ['user'] });
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const course = await models.Course.findByPk(id);
      if (!course) {
        throw boom.notFound('Course not found');
      } else {
        return course;
      }
    } catch (error) {
      return error;
    }
  }
  async findByUser(userId) {
    const coursesByUser = await models.Course.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    return coursesByUser;
  }
  async create(data) {
    try {
      const newCourse = await models.Course.create(data);
      return newCourse;
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    const course = await models.Course.findByPk(id);
    if (!course) {
      throw boom.notFound('Course not exist for updated');
    }
    const res = course.update(changes);
    return res;
  }
  async deletebyId(id) {
    try {
      const courseId = await models.Course.findByPk(id);
      if (!courseId) {
        throw boom.notFound('Course not found or delete');
      } else {
        await courseId.destroy();
      }
      return { id };
    } catch (error) {
      return error;
    }
  }
}

module.exports = CourseService;
