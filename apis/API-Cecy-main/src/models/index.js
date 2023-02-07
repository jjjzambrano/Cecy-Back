const { User, UserSchema } = require('./authentication/user.model');
const { Customer, CustomerSchema } = require('./authentication/customer.model');
const { Career, CareerSchema } = require('./coordinator-career/careers');
const { Role, RoleSchema } = require('./authentication/roles.models');
const { Course, CourseSchema } = require('./docentes/course.model');
const { Catalogue, CatalogueSchema } = require('./docentes/catalogue.model');
const { Instructor, InstructorSchema } = require('./docentes/instructor.model');
const { GeneralInformation, GeneralInformationSchema } = require('./docentes/plan/generalInformation.model');
const { CurriculumDesign, CurriculumDesignSchema } = require('./docentes/plan/curriculumDesign.model');

const {
  PlanificationCourse,
  PlanificationCourseSchema,
} = require('./coordinator-career/planification.course.model');
const {
  Teacher,
  TeacherSchema,
} = require('./coordinator-career/teachers.course.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Career.init(CareerSchema, Career.config(sequelize));
  Catalogue.init(CatalogueSchema, Catalogue.config(sequelize));

  /* Coordinator-Career */
  PlanificationCourse.init(
    PlanificationCourseSchema,
    PlanificationCourse.config(sequelize)
  );
  Teacher.init(TeacherSchema, Teacher.config(sequelize));

  /* Docente */
  Course.init(CourseSchema, Course.config(sequelize));
  Instructor.init(InstructorSchema, Instructor.config(sequelize))
  GeneralInformation.init(GeneralInformationSchema, GeneralInformation.config(sequelize))
  CurriculumDesign.init(CurriculumDesignSchema, CurriculumDesign.config(sequelize))



  /* Associate */
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Course.associate(sequelize.models);
  PlanificationCourse.associate(sequelize.models);
  Career.associate(sequelize.models);
  Role.associate(sequelize.models);

  /* Associate docente */
  Catalogue.associate(sequelize.models);
  Course.associate(sequelize.models);
  Instructor.associate(sequelize.models);
  GeneralInformation.associate(sequelize.models);
  CurriculumDesign.associate(sequelize.models);


}

module.exports = setupModels;
