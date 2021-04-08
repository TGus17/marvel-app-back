const { User } = require('../models');

const createUser = async ({ name, email, password }) => await User
  .create({ name, email, password });

  module.exports = {
    createUser,
  };
  