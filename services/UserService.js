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

const updateUser = async (id, name, email, password) => User.update({ name, email, password }, { where: { id } });

const deleteUser = async (id) => User.destroy({ where: { id } });

  module.exports = {
    createUser,
    findUserByEmail,
    updateUser,
    deleteUser,
  };
