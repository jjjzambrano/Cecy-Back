const boom = require('@hapi/boom');
const { models } = require('../../database/database');

class RolesService {
  constructor() {}
  async find() {
    try {
      const roles = await models.Role.findAll();
      return roles;
    } catch (error) {
      return error;
    }
  }
  async create(data) {
    try {
      const newRole = await models.Role.create(data);
      return newRole;
    } catch (error) {
      return error;
    }
  }
  async findOne(id) {
    try {
      const roleId = await models.Role.findByPk(id);
      if (!roleId) {
        throw boom.notFound('Role not found');
      } else {
        return roleId;
      }
    } catch (error) {
      return error;
    }
  }
  async updatebyId(id, changes) {
    const role = await models.Role.findByPk(id);
    if (!role) {
      throw boom.notFound('Role not exist for updated');
    }
    const res = role.update(changes);
    return res;
  }
  async deletebyId(id) {
    try {
      const roleId = await models.Role.findByPk(id);
      if (!roleId) {
        throw boom.notFound('Role not found or delete');
      } else {
        await roleId.destroy();
      }
      return { id };
    } catch (error) {
      return error;
    }
  }
}

module.exports = RolesService;
