const bcryp = require('bcrypt');
const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await bcryp.genSalt(11, password);
  const hash = await bcryp.hash(password, salt);
  return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
  try {
    await bcryp.compare(password, savedPassword);
  } catch (error) {
    console.log(error);
  }
};

module.exports = helpers;
