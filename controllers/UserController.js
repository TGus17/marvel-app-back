const { Router } = require('express');
const { updateUser } = require('../services/UserService');
const { response } = require('../util');
const UserController = new Router();

UserController.get('/', (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});

UserController.put('/', async (req, res) => {
  const { user: { id } } = req;
  const { name, email, password } = req.body;
  await updateUser(id, name, email, password);
  res.status(200).json(response(null, 'User has been updated.'))
});

module.exports = UserController;
