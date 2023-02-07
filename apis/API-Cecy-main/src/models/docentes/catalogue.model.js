const { DataTypes, Sequelize, Model } = require('sequelize');
const CATALOGUE_TABLE = 'catalogues';

const CatalogueSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
  parentId: {
    field: 'parent_id',
    type: DataTypes.BIGINT,
  },
  code: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  icon: {
    type: DataTypes.STRING(255),
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
};

class Catalogue extends Model {
  static associate(models) {
    this.hasOne(models.CurriculumDesign, {
      foreignKey: 'area',
    });
    this.hasOne(models.CurriculumDesign, {
      foreignKey: 'speciality',
    });

    this.hasOne(models.GeneralInformation, {
      foreignKey: 'category',
    });
    this.hasOne(models.GeneralInformation, {
      foreignKey: 'certifiedType',
    });
    this.hasOne(models.GeneralInformation, {
      foreignKey: 'courseType',
    });
    this.hasOne(models.GeneralInformation, {
      foreignKey: 'entityCertification',
    });
    this.hasOne(models.GeneralInformation, {
      foreignKey: 'formationType',
    });
    this.hasOne(models.GeneralInformation, {
      foreignKey: 'modality',
    });
    this.hasOne(models.Catalogue, {
      foreignKey: 'state',
    });

  }


  static config(sequelize) {
    return {
      sequelize,
      tableName: CATALOGUE_TABLE,
      modeName: 'Catalogue',
      timestamps: true,
    };
  }
}

module.exports = { CATALOGUE_TABLE, CatalogueSchema, Catalogue };
