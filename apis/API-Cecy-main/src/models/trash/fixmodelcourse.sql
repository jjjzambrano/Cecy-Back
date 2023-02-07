create table cecy.courses
(
    frequency_id            bigint
        constraint courses_frequency_id_foreign
            references cecy.catalogues,
    means_verification_id   bigint
        constraint courses_means_verification_id_foreign
            references cecy.catalogues,
    modality_id             bigint
        constraint courses_modality_id_foreign
            references cecy.catalogues,
    responsible_id          bigint
        constraint courses_responsible_id_foreign
            references cecy.instructors,
    school_period_id        bigint
        constraint courses_school_period_id_foreign
            references cecy.courses,
    speciality_id           bigint
        constraint courses_speciality_id_foreign
            references cecy.catalogues,
    state_id                bigint
        constraint courses_state_id_foreign
            references cecy.catalogues,

);




create table cecy.catalogues
(
    id          bigserial
        primary key,
    created_at  timestamp(0),
    updated_at  timestamp(0),
    deleted_at  timestamp(0),
    parent_id   bigint,
    code        varchar(255) not null,
    description text,
    icon        varchar(255),
    name        text         not null,
    type        varchar(255) not null
);


create table cecy.instructors
(
    id         bigserial
        primary key,
    created_at timestamp(0),
    updated_at timestamp(0),
    deleted_at timestamp(0),
    user_id    bigint not null
        constraint instructors_user_id_foreign
            references public.users (id)
);





academic_period_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  area_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  career_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'careers',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  category_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  certified_type_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  compliance_indicator_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  control_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  course_type_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  entity_certification_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  formation_type_id: {
    type: Sequelize.BIGINT,
    references: {
      model: 'catalogues',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  frequency_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "catalogues",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    means_verification_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "catalogues",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    modality_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "catalogues",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    responsible_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "instructors",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    school_period_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "courses",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    speciality_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "catalogues",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    state_id: {
      type: Sequelize.BIGINT,
      references: {
        model: "catalogues",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    }
