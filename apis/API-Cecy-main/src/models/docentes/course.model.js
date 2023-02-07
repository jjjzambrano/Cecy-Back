const { DataTypes, Model } = require('sequelize');
const { CATALOGUE_TABLE } = require('./catalogue.model');
const COURSE_TABLE = 'courses';

const CourseSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  code: {
    type: DataTypes.STRING,
  },
  state: {
    field: 'state_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  image: {
    field: 'image_id',
    type: DataTypes.INTEGER,
  },
  generalInformation: {
    field: 'generalInformation_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  curriculumDesign: {
    field: 'curriculum_design_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }

};

class Course extends Model {
  static associate(models) {
    this.belongsTo(models.GeneralInformation, {
      foreignKey: 'generalInformation',
    });
    this.belongsTo(models.CurriculumDesign, {
      foreignKey: 'curriculumDesign',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'state',
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COURSE_TABLE,
      modelName: 'Course',
      timestamps: false,
    };
  }
}
module.exports = { COURSE_TABLE, CourseSchema, Course };
