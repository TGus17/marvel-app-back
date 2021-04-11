const { Router } = require('express');
const service = require('../services/UserService');
const { response } = require('../util');
const UserController = new Router();

UserController.get('/', (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});

UserController.put('/', async (req, res) => {
  const { user: { id } } = req;
  const { name, email, password } = req.body;
  await service.updateUser(id, name, email, password);
  res.status(200).json(response(null, 'User has been updated.'))
});

UserController.delete('/', async (req, res) => {
  const { user: { id } } = req;
  await service.deleteUser(id);
  res.status(200).json(response(null, 'User has been deleted.'))
});

module.exports = UserController;
