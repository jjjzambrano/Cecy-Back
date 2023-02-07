const { DataTypes, Sequelize, Model } = require('sequelize');
const ROLE_TABLE = 'roles';

const RoleSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    unique: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Role extends Model {
  static associate(models) {
    this.hasMany(models.PlanificationCourse, {
      as: 'planificationCourse',
      foreignKey: 'roleId'

    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false,
    };
  }
}

module.exports = { ROLE_TABLE, RoleSchema, Role };
