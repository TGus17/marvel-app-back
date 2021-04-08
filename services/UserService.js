const { User } = require('../models');

const createUser = async ({ name, email, password }) => {
  const createdUser = await User.create({ name, email, password });
  return createdUser.dataValues;
}

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
