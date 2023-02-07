const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('./../../database/database');

class UserService {
  constructor() {}
  async find() {
    try {
      const users = await models.User.findAll({
        include: ['customer'],
      });
      return users;
    } catch (error) {
      return error;
    }
  }

  async findByprofile (id){
    return await models.User.findAll({
      where: {
        id
      },
      include: ['customer']
    })
    //delete dataValues.password;
  }
  /* async findByIdentificationCard(identificationCard) {
    try {
      const userIdentificationCard = await models.User.findOne({
        where: { identificationCard },
      });
      console.log(userIdentificationCard);
      return userIdentificationCard;
    } catch (error) {
      return error;
    }
  } */

  async findByEmail(email) {
    try {
      const findEmail = await models.User.findOne({
        where: { email },
      });
      console.log(findEmail);
      return findEmail;
    } catch (error) {
      console.log(error);
    }
  }

  async create(data) {
    try {
      const hash = await bcrypt.hash(data.password, 10);
      const newUser = await models.User.create({
        ...data,
        password: hash,
      });
      delete newUser.dataValues.password;
      delete newUser.dataValues.recoveryToken;
      return newUser;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      //const userId = await models.User.findByPk(id, { include: ['courses'] });
      const userId = await models.User.findByPk(id);
      if (!userId) {
        throw boom.notFound('User not found');
      } else {
        return userId;
      }
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    const course = await models.User.findByPk(id);
    if (!course) {
      throw boom.notFound('User not exist for updated');
    }
    const res = course.update(changes);
    return res;
  }
  async deletebyId(id) {
    try {
      const userId = await models.User.findByPk(id);
      if (!userId) {
        throw boom.notFound('User not found or delete');
      } else {
        await userId.destroy();
      }
      return { id };
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
