const { DataTypes, Model } = require('sequelize');
const { CATALOGUE_TABLE } = require('../catalogue.model');
const CURRICULUMDESIGN_TABLE = 'curriculum_design';
// const { CATALOGUE_TABLE } = require('./catalogue.model');


const CurriculumDesignSchema = {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    alignment: {
      field: 'alignment',
      type: DataTypes.STRING,
    },
    area: {
      field: 'area_id',
      type: DataTypes.INTEGER,
      references: {
        model: CATALOGUE_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    bibliographies: {
      field: 'bibliographies',
      type: DataTypes.JSON,
    },
    courseId: {
      field: 'course_id',
      type: DataTypes.INTEGER,
    },
    evaluationMechanisms: {
      field: 'evaluationMechanisms',
      type: DataTypes.JSON,
    },
    learningEnvironments: {
      field: 'learning_environments',
      type: DataTypes.JSON,
    },
    objective: {
      field: 'objective',
      type: DataTypes.STRING,
    },
    practiceHours: {
      field: 'practice_hours',
      type: DataTypes.INTEGER,
    },
    speciality: {
      field: 'speciality_id',
      type: DataTypes.INTEGER,
      references: {
        model: CATALOGUE_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    teachingStrategies: {
      field: 'teaching_strategies',
      type: DataTypes.JSON,
    },
    techniquesRequisites: {
      field: 'techniques_requisites',
      type: DataTypes.JSON,
    },
    theoryHours: {
      field: 'theory_hours',
      type: DataTypes.INTEGER,
    }

};
class CurriculumDesign extends Model {
  static associate(models) {

    this.belongsTo(models.Catalogue, {
      foreignKey: 'area',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'speciality',
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CURRICULUMDESIGN_TABLE,
      modeName: 'CurriculumDesign',
      timestamps: false,
    };
  }
}


module.exports = { CURRICULUMDESIGN_TABLE, CurriculumDesignSchema, CurriculumDesign };
