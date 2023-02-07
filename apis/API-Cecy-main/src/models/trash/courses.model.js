// const { DataTypes, Sequelize, Model } = require('sequelize');
// const COURSE_TABLE = 'courses';
// const { CUSTOMER_TABLE } = require('./../authentication/customer.model');
// const { CATALOGUE_TABLE } = require('./../docentes/catalogue.model');

// const CourseSchema = {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//   },
//   customer : {
//     field: 'customer_id',
//     allowNull: false,
//     type: DataTypes.INTEGER,
//     references: {
//       model: CUSTOMER_TABLE,
//       key: 'id',
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'SET NULL',
//   },
//   catalogue : {
//     field: 'catalogue_id',
//     allowNull: false,
//     type: DataTypes.INTEGER,
//     references: {
//       model: CATALOGUE_TABLE,
//       key: 'id',
//     },
//     onUpdate: 'CASCADE',
//     onDelete: 'SET NULL',
//   },
//   createdAt: {
//     allowNull: false,
//     type: DataTypes.DATE,
//     field: 'create_at',
//     defaultValue: Sequelize.NOW,
//   },
//   updateAt: {
//     allowNull: true,
//     type: DataTypes.DATE,
//     field: 'update_at',
//     defaultValue: Sequelize.NOW,
//   },
// };

// class Course extends Model {
//   static associate(models) {
//     this.belongsTo(models.Customer, {
//       as: 'customer',
//     });

//     this.belongsTo(models.Catalogue, {
//       as: 'catalogue',
//     });
//   }

//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: COURSE_TABLE,
//       modelName: 'Course',
//       timestamps: false,
//     };
//   }
// }
// module.exports = { COURSE_TABLE, CourseSchema, Course };
