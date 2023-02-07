require('dotenv').config();
const config = {
  env: process.env.NODE_ENV || 'dev',
  api: {
    port: process.env.API_PORT || 3000,
  },
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JWT_SECRET,
  mailerUser: process.env.MAILER_USER,
  mailerPassword: process.env.MAILER_PASSWORD,
  mailerPort: process.env.MAILE_PORT,
  jwtSecretRecover: process.env.JWT_SECRET_RECOVERY,
};

module.exports = config;
