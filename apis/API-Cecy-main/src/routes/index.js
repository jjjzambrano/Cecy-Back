const express = require('express');
const authRouter = require('./authentication/auth.router');
const userRouter = require('./authentication/user.router');
const customerRouter = require('./authentication/customer.router');
const profileRouter = require('./authentication/profile.router');
const rolesRouter = require('./authentication/roles.router');
const planificationCourseRouter = require('./coordinator-career/planification.courses.router');
const teacherRouter = require('./coordinator-career/teachers.router');
const CareerRouter = require('./coordinator-career/career.router');
const courseRouter = require('./docente/course.router');
const profilePlanificationRouter = require('./authentication/profile.planification.router');



function routerApi(app) {
  //router father
  const router = express.Router();
  app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/auth', authRouter);
    router.use('/roles', rolesRouter);
    router.use('/customers', customerRouter);
    router.use('/profile', profileRouter);
    router.use('/courses', courseRouter);
    router.use('/planifications', profilePlanificationRouter)
    router.use('/planifications-courses', planificationCourseRouter);
    router.use('/teachers', teacherRouter);
    router.use('/careers', CareerRouter);
}

module.exports = routerApi;
