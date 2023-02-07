const boom = require('@hapi/boom');
const { models } = require('../../database/database');

class PlanificationCoursesService {
  constructor() {}
  async find() {
    try {
      const planification = await models.PlanificationCourse.findAll({
        include: ['career', 'role', 'customer'],
      });
      return planification;
    } catch (error) {
      console.log(error);
    }
  }

  async findByUser(userId) {
    const planification = await models.PlanificationCourse.findAll({
      where: {
        '$customer.user.id$': userId,
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    return planification
  }

  async create(data) {
    try {
      const newPlanification = await models.PlanificationCourse.create(data);
      return newPlanification;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const planificationId = await models.PlanificationCourse.findByPk(id, {
        include: ['customer', 'career' , 'role'],
      });
      if (!planificationId) {
        throw boom.notFound('PlanificationCourses not found');
      } else {
        return planificationId;
      }
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    try {
      const planificationCoursesId = await models.PlanificationCourse.findByPk(
        id
      );
      if (!planificationCoursesId) {
        throw boom.notFound('Planification not exist for updated');
      }
      const response = planificationCoursesId.update(changes);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateApproveCourse(id, state){
    try {
      const planificationCoursesId = await models.PlanificationCourse.findByPk(id);
      if (!planificationCoursesId) {
        throw boom.notFound('Planification not exist for updated');
      }
      const response = planificationCoursesId.update({state});
      return response
    } catch (error) {
      return error
    }
  }
  async deletebyId(id) {
    try {
      const planificationCoursesId = await models.PlanificationCourse.findByPk(
        id
      );
      if (!planificationCoursesId) {
        throw boom.notFound('PlanficationCourses not found or delete');
      } else {
        await planificationCoursesId.destroy();
      }
      return {
        id,
        planificationCoursesId,
      };
    } catch (error) {
      return error;
    }
  }
}

module.exports = PlanificationCoursesService;
