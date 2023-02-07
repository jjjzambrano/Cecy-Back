const { DataTypes, Sequelize, Model } = require('sequelize');
const { CUSTOMER_TABLE } = require('../authentication/customer.model');
const { ROLE_TABLE } = require('../authentication/roles.models');
const { CAREER_TABLE } = require('./careers');
const PLANIFICATION_COURSES_TABLE = 'planifications_courses';

const PlanificationCourseSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codeCourse: {
    type: DataTypes.STRING,
    field: 'code_course',
    unique: true
  },
  name: {
    type: DataTypes.STRING,
  },
  durationTime: {
    field: 'duration_time',
    type: DataTypes.INTEGER,
  },
  startDate: {
    type: DataTypes.DATE,
    field: 'start_date',
  },
  finishDate: {
    type: DataTypes.DATE,
    field: 'finish_date',
  },
  state: {
    type: DataTypes.STRING,
  },
  careerId: {
    field: 'career_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CAREER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  roleId: {
    field: 'role_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class PlanificationCourse extends Model {
  static associate(models) {
    this.belongsTo(models.Career, {
      as: 'career',
    });
    this.belongsTo(models.Role, {
      as: 'role',
    });
    this.belongsTo(models.Customer, {
      as: 'customer',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLANIFICATION_COURSES_TABLE,
      modelName: 'PlanificationCourse',
      timestamps: false,
    };
  }
}

module.exports = {
  PLANIFICATION_COURSES_TABLE,
  PlanificationCourseSchema,
  PlanificationCourse,
};
