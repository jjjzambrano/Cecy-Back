const { DataTypes, Model, Sequelize } = require('sequelize');
const { USER_TABLE } = require('../authentication/user.model');
const INSTRUCTOR_TABLE = 'instructors';

const InstructorSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
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
};
class Instructor extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
    });
    this.hasMany(models.Course, {
      foreignKey: 'responsible'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INSTRUCTOR_TABLE,
      modeName: 'Instructor',
      timestamps: false,
    };
  }
}

module.exports = { INSTRUCTOR_TABLE, InstructorSchema, Instructor };





// const { Model, DataTypes } = require('sequelize');

// class Instructor extends Model {
//   static init(sequelize) {
//     super.init({
//       id: {
//         type: DataTypes.BIGSERIAL,
//         primaryKey: true
//       },
//       created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//       },
//       updated_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//       },
//       deleted_at: {
//         type: DataTypes.DATE
//       },
//       user_id: {
//         type: DataTypes.BIGINT,
//         allowNull: false,
//         references: {
//           model: 'users',
//           key: 'id'
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//       }
//     }, {
//       sequelize,
//       tableName: 'instructors',
//       timestamps: false
//     });
//   }
// }

// module.exports = Instructor;
