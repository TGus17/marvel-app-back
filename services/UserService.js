const { User } = require('../models');

const createUser = async ({ name, email, password }) => await User
  .create({ name, email, password });

const findUserByEmail = async (email) => {
  try {
    const { dataValues } = await User.findOne({ where: { email } });
    return dataValues;
  } catch (_err) {
    return null;
  }
}
  module.exports = {
    createUser,
    findUserByEmail,
  };
