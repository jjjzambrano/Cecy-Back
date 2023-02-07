const { DataTypes, Sequelize, Model } = require('sequelize');
const CAREER_TABLE = 'careers';

const CareerSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Career extends Model {
  static associate(models) {
    this.hasMany(models.PlanificationCourse, {
      as: 'planificationCourse',
      foreignKey: 'careerId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CAREER_TABLE,
      modelName: 'Career',
      timestamps: false,
    };
  }
}

module.exports = { CAREER_TABLE, CareerSchema, Career };
