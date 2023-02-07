const { Sequelize } = require('sequelize');
const {
  dbHost,
  dbUser,
  dbPassword,
  dbPort,
  dbName,
} = require('../config/config');
const setupModels = require('../models');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const db = new Sequelize(URI, {
  dialect: 'postgres',
});

setupModels(db);

/* Syncronization sequelize run */
db.sync({
  //force: true,
  alter: true
});

module.exports = db;
