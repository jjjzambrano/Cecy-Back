const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const config = require('./config/config');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');
const { checkApiKey } = require('./middleware/auth/auth.handler');

const app = express();
//const whiteList = ['http://localhost:4200'];
/* const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
}; */

//Sequelize
async function main() {
  try {
    app.listen(config.api.port, () => {
      console.log('Server on port ' + config.api.port);
    });
  } catch (error) {
    console.log(error);
  }
}

// middleawares
main();
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
require('./utils/auth');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* app.use(passport.initialize()) */;
/* app.use(passport.session()); */

app.get('/ruta', checkApiKey, (req, res) => {
  res.send('Hello world protected');
});

// Routes
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
