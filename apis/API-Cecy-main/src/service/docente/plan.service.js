// const boom = require('@hapi/boom');
const { models } = require('../../database/database');

class PlanService {
  constructor() {}

  async updatebyIdGeneralInformation(id, changes) {
    try {
      const planId = await models.GeneralInformation.findOne({
        where: {
          courseId: id,
        },
      });

      if (planId) {
        await models.GeneralInformation.update(changes, {
          where: { courseId: id },
        });
        const courseUpdate = await models.GeneralInformation.findOne({
          where: {
            courseId: id,
          },
        });
        return courseUpdate;
      }
      const resCreate = await models.GeneralInformation.create(changes);
      return resCreate;
    } catch (error) {
      return error;
    }
  }
  async updatebyIdCurricularDesign(id, changes) {
    try {
      const planId = await models.CurriculumDesign.findOne({
        where: {
          courseId: id,
        },
      });

      if (planId) {
        await models.CurriculumDesign.update(changes, {
          where: { courseId: id },
        });
        const courseUpdate = await models.CurriculumDesign.findOne({
          where: {
            courseId: id,
          },
        });
        return courseUpdate;
      }
      const resCreate = await models.CurriculumDesign.create(changes);
      return resCreate;
    } catch (error) {
      return error;
    }
  }
  async getIdGeneralInformation(id) {
    try {
      const generalInformationId = await models.GeneralInformation.findOne({
        where: {
          courseId: id,
        },
      });

      if (generalInformationId) {
        return generalInformationId;
      }else{
        return null;
      }

    } catch (error) {
      return error;
    }
  }
  async getIdCurricularDesign(id) {
    try {
      const curriculumDesign = await models.CurriculumDesign.findOne({
        where: {
          courseId: id,
        },
      });

      if (curriculumDesign) {
        return curriculumDesign;
      }else{
        return null;
      }

    } catch (error) {
      return error;
    }
  }
}

module.exports = PlanService;
