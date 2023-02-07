  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  academic_period_id: {
    type: DataTypes.BIGINT,
  },
  area_id: {
    type: DataTypes.BIGINT,
  },
  career_id: {
    type: DataTypes.BIGINT,
  },
  category_id: {
    type: DataTypes.BIGINT,
  },
  certified_type_id: {
    type: DataTypes.BIGINT,
  },
  compliance_indicator_id: {
    type: DataTypes.BIGINT,
  },
  control_id: {
    type: DataTypes.BIGINT,
  },
  course_type_id: {
    type: DataTypes.BIGINT,
  },
  entity_certification_id: {
    type: DataTypes.BIGINT,
  },
  formation_type_id: {
    type: DataTypes.BIGINT,
  },
  frequency_id: {
    type: DataTypes.BIGINT,
  },
  means_verification_id: {
    type: DataTypes.BIGINT,
  },
  modality_id: {
    type: DataTypes.BIGINT,
  },
  responsible_id: {
    type: DataTypes.BIGINT,
  },
  school_period_id: {
    type: DataTypes.BIGINT,
  },
  speciality_id: {
    type: DataTypes.BIGINT,
  },
  state_id: {
    type: DataTypes.BIGINT,
  },
  abbreviation: {
    type: DataTypes.STRING,
  },
  alignment: {
    type: DataTypes.STRING,
  },
  approved_at: {
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
    type: DataTypes.JSON,
  },
  expired_at: {
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
    type: DataTypes.DATE,
  },
  record_number: {
    type: DataTypes.STRING,
  },
  learning_environments: {
    type: DataTypes.JSON,
  },
  local_proposal: {
    type: DataTypes.STRING,
  },
  objective: {
    type: DataTypes.STRING,
  },
  observations: {
    type: DataTypes.JSON,
  },
  practice_hours: {
    type: DataTypes.INTEGER,
  },
  proposed_at: {
    type: DataTypes.DATE,
  },
  project: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.BOOLEAN,
  },
  setec_name: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  target_groups: {
    type: DataTypes.JSON,
  },
  teaching_strategies: {
    type: DataTypes.JSON,
  },
  techniques_requisites: {
    type: DataTypes.JSON,
  },
  theory_hours: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted_at: {
    type: DataTypes.DATE,
  }


































create table courses
(
    academic_period_id      bigint
        constraint courses_academic_period_id_foreign
            references catalogues,
    area_id                 bigint
        constraint courses_area_id_foreign
            references catalogues,
    career_id               bigint
        constraint courses_career_id_foreign
            references careers (id),
    category_id             bigint
        constraint courses_category_id_foreign
            references catalogues,
    certified_type_id       bigint
        constraint courses_certified_type_id_foreign
            references catalogues,
    compliance_indicator_id bigint
        constraint courses_compliance_indicator_id_foreign
            references catalogues,
    control_id              bigint
        constraint courses_control_id_foreign
            references catalogues,
    course_type_id          bigint
        constraint courses_course_type_id_foreign
            references catalogues,
    entity_certification_id bigint
        constraint courses_entity_certification_id_foreign
            references catalogues,
    formation_type_id       bigint
        constraint courses_formation_type_id_foreign
            references catalogues,
    frequency_id            bigint
        constraint courses_frequency_id_foreign
            references catalogues,
    means_verification_id   bigint
        constraint courses_means_verification_id_foreign
            references catalogues,
    modality_id             bigint
        constraint courses_modality_id_foreign
            references catalogues,
    responsible_id          bigint
        constraint courses_responsible_id_foreign
            references instructors,
    school_period_id        bigint
        constraint courses_school_period_id_foreign
            references courses,
    speciality_id           bigint
        constraint courses_speciality_id_foreign
            references catalogues,
    state_id                bigint
        constraint courses_state_id_foreign
            references catalogues
);











academic_period_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    area_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    career_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'careers',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    category_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    certified_type_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    compliance_indicator_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    control_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    course_type_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    entity_certification_id: {
        type: Sequelize.BIGINT,
        references: {
            model: 'catalogues',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    formation_type_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
frequency_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
means_verification_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
modality_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
responsible_id: {
type: Sequelize.BIGINT,
references: {
model: "instructors",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
school_period_id: {
type: Sequelize.BIGINT,
references: {
model: "courses",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
speciality_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
},
state_id: {
type: Sequelize.BIGINT,
references: {
model: "catalogues",
key: "id"
},
onUpdate: "CASCADE",
onDelete: "SET NULL",
allowNull: true
}

























create table cecy.courses
(
    id                      bigserial
        primary key,
    created_at              timestamp(0),
    updated_at              timestamp(0),
    deleted_at              timestamp(0),

    abbreviation            varchar(255),
    alignment               varchar(255),
    approved_at             date,
    bibliographies          json,
    code                    varchar(255),
    cost                    double precision,
    duration                integer,
    evaluation_mechanisms   json,
    expired_at              date,
    free                    boolean,
    name                    varchar(255),
    needs                   json,
    needed_at               date,
    record_number           varchar(255),
    learning_environments   json,
    local_proposal          varchar(255),
    objective               varchar(255),
    observations            json,
    practice_hours          integer,
    proposed_at             date,
    project                 varchar(255),
    public                  boolean,
    setec_name              varchar(255),
    summary                 varchar(255),
    target_groups           json,
    teaching_strategies     json,
    techniques_requisites   json,
    theory_hours            integer
);









