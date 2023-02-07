const { DataTypes, Sequelize, Model } = require('sequelize');
const CUSTOMER_TABLE = 'customers';
const { USER_TABLE } = require('./../../models/authentication/user.model');

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    type: DataTypes.STRING,
  },
  userId: {
    unique: true,
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  createAt: {
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
    });
    this.hasMany(models.PlanificationCourse, {
      as: 'planification',
      foreignKey: 'customerId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modeName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
