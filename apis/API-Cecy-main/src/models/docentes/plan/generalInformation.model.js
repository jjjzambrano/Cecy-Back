const { DataTypes, Model } = require('sequelize');
const GENERALINFORMATION_TABLE = 'general_information';
const { CATALOGUE_TABLE } = require('../catalogue.model');


const GeneralInformationSchema = {
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  abbreviation: {
    field: 'abbreviation',
    type: DataTypes.STRING,
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
  courseId: {
    field: 'course_id',
    type: DataTypes.INTEGER,
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
  duration: {
    field: 'duration',
    type: DataTypes.INTEGER,
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
  needs: {
    field: 'needs',
    type: DataTypes.JSON,
  },
  participantTypes: {
    field: 'participant_types',
    type: DataTypes.JSON,
  },
  project: {
    field: 'project',
    type: DataTypes.TEXT,
  },
  summary: {
    field: 'summary',
    type: DataTypes.TEXT,
  },
  targetGroups: {
    field: 'target_groups',
    type: DataTypes.JSON,
  }
};
class GeneralInformation extends Model {
  static associate(models) {
    this.belongsTo(models.Catalogue, {
      foreignKey: 'category',
    });
    this.belongsTo(models.Catalogue, {
      foreignKey: 'certifiedType',
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
      foreignKey: 'modality',
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GENERALINFORMATION_TABLE,
      modeName: 'GeneralInformation',
      timestamps: false,
    };
  }
}


module.exports = { GENERALINFORMATION_TABLE, GeneralInformationSchema, GeneralInformation };
