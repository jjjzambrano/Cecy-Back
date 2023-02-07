const CourseSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  academic_period_id: {
    field: 'academic_period_id',
    type: DataTypes.BIGINT,
  },
  area_id: {
    field: 'area_id',
    type: DataTypes.BIGINT,
  },
  career_id: {
    field: 'career_id',
    type: DataTypes.BIGINT,
  },
  category_id: {
    field: 'category_id',
    type: DataTypes.BIGINT,
  },
  certified_type_id: {
    field: 'certified_type_id',
    type: DataTypes.BIGINT,
  },
  compliance_indicator_id: {
    field: 'compliance_indicator_id',
    type: DataTypes.BIGINT,
  },
  control_id: {
    field: 'control_id',
    type: DataTypes.BIGINT,
  },
  course_type_id: {
    field: 'course_type_id',
    type: DataTypes.BIGINT,
  },
  entity_certification_id: {
    field: 'entity_certification_id',
    type: DataTypes.BIGINT,
  },
  formation_type_id: {
    field: 'formation_type_id',
    type: DataTypes.BIGINT,
  },
  frequency_id: {
    field: 'frequency_id',
    type: DataTypes.BIGINT,
  },
  means_verification_id: {
    field: 'means_verification_id',
    type: DataTypes.BIGINT,
  },
  modality_id: {
    field: 'modality_id',
    type: DataTypes.BIGINT,
  },
  responsible_id: {
    field: 'responsible_id',
    type: DataTypes.BIGINT,
  },
  school_period_id: {
    field: 'school_period_id',
    type: DataTypes.BIGINT,
  },
  speciality_id: {
    field: 'speciality_id',
    type: DataTypes.BIGINT,
  },
  state_id: {
    field: 'state_id',
    type: DataTypes.BIGINT,
  },
  image_id: {
    field: 'image_id',
    type: DataTypes.BIGINT,
  },
  abbreviation: {
    type: DataTypes.STRING,
  },
  alignment: {
    type: DataTypes.STRING,
  },
  approved_at: {
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
  evaluation_mechanisms: {
    field: 'evaluation_mechanisms',
    type: DataTypes.JSON,
  },
  expired_at: {
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
  needed_at: {
    field: 'needed_at',
    type: DataTypes.DATE,
  },
  record_number: {
    field: 'record_number',
    type: DataTypes.STRING,
  },
  learning_environments: {
    field: 'learning_environments',
    type: DataTypes.JSON,
  },
  local_proposal: {
    field: 'local_proposal',
    type: DataTypes.STRING,
  },
  objective: {
    type: DataTypes.STRING,
  },
  observations: {
    type: DataTypes.JSON,
  },
  practice_hours: {
    field: 'practice_hours',
    type: DataTypes.INTEGER,
  },
  proposed_at: {
    field: 'proposed_at',
    type: DataTypes.DATE,
  },
  project: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.BOOLEAN,
  },
  setec_name: {
    field: 'setec_name',
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  target_groups: {
    field: 'target_groups',
    type: DataTypes.JSON,
  },
  teaching_strategies: {
    field: 'teaching_strategies',
    type: DataTypes.JSON,
  },
  techniques_requisites: {
    field: 'techniques_requisites',
    type: DataTypes.JSON,
  },
  theory_hours: {
    field: 'theory_hours',
    type: DataTypes.INTEGER,
  },
  created_at: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updated_at: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
  deleted_at: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  }
};
