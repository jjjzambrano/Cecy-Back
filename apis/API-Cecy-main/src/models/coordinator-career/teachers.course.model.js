const { DataTypes, Sequelize, Model } = require('sequelize');
const TEACHER_TABLE = 'teachers';

const TeacherSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Teacher extends Model {
  static associate() {
    /* this.hasMany(models.PlanificationCourse, {
      as: 'planificationCourse',
      foreignKey: 'teacherId',
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TEACHER_TABLE,
      modelName: 'Teacher',
      timestamps: false,
    };
  }
}

module.exports = { TEACHER_TABLE, TeacherSchema, Teacher };
