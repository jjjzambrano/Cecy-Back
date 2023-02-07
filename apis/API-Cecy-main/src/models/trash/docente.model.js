const { DataTypes, Model, Sequelize } = require('sequelize');
const { CAREER_TABLE } = require('../coordinator-career/careers');
const { CATALOGUE_TABLE } = require('./catalogue.model');
const { INSTRUCTOR_TABLE } = require('./instructor.model');
const COURSE_TABLE = 'courses';

const CourseSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  academicPeriod: {
    field: 'academic_period_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
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
  career: {
    field: 'career_id',
    type: DataTypes.INTEGER,
    references: {
      model: CAREER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  category: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  certifiedType: {
    field: 'certified_type_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  complianceIndicator: {
    field: 'compliance_indicator_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  control: {
    field: 'control_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  courseType: {
    field: 'course_type_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  entityCertification: {
    field: 'entity_certification_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  formationType: {
    field: 'formation_type_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  frequency: {
    field: 'frequency_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  meansVerification: {
    field: 'means_verification_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  modality: {
    field: 'modality_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  responsible: {
    field: 'responsible_id',
    type: DataTypes.INTEGER,
    references: {
      model: INSTRUCTOR_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  schoolPeriod: {
    field: 'school_period_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATALOGUE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
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
    type: DataTypes.BIGINT,
  },
  abbreviation: {
    type: DataTypes.STRING,
  },
  alignment: {
    type: DataTypes.STRING,
  },
  approvedAt: {
    field: 'approved_at',
    type: DataTypes.DATE,
  },
  bibliographies: {
    type: DataTypes.JSON,
  },
  code: {
    type: DataTypes.STRING,
  },
  cost: {
    type: DataTypes.DOUBLE,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  evaluationMechanisms: {
    field: 'evaluation_mechanisms',
    type: DataTypes.JSON,
  },
  expiredAt: {
    field: 'expired_at',
    type: DataTypes.DATE,
  },
  free: {
    type: DataTypes.BOOLEAN,
  },
  name: {
    type: DataTypes.STRING,
  },
  needs: {
    type: DataTypes.JSON,
  },
  neededAt: {
    field: 'needed_at',
    type: DataTypes.DATE,
  },
  recordNumber: {
    field: 'record_number',
    type: DataTypes.STRING,
  },
  learningEnvironments: {
    field: 'learning_environments',
    type: DataTypes.JSON,
  },
  localProposal: {
    field: 'local_proposal',
    type: DataTypes.STRING,
  },
  objective: {
    type: DataTypes.STRING,
  },
  observations: {
    type: DataTypes.JSON,
  },
  practiceHours: {
    field: 'practice_hours',
    type: DataTypes.INTEGER,
  },
  proposedAt: {
    field: 'proposed_at',
    type: DataTypes.DATE,
  },
  project: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.BOOLEAN,
  },
  setecName: {
    field: 'setec_name',
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  targetGroups: {
    field: 'target_groups',
    type: DataTypes.JSON,
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
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};

class Course extends Model {
  static associate(models) {
    this.belongsTo(models.Catalogue, {
      foreignKey: 'academicPeriod',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'area',
    });
    this.belongsTo(models.Career, {
      foreignKey: 'career',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'category',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'certifiedType',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'complianceIndicator',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'control',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'courseType',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'entityCertification',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'formationType',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'frequency',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'meansVerification',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'modality',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'schoolPeriod',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'speciality',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'state',
    });
    this.belongsTo(models.Instructor, {
      foreignKey: 'responsible',
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
