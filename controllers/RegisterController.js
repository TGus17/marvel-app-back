const { Router } = require('express');
const service = require('../services/UserService');
const { response } = require('../util');
const RegisterController = new Router();

RegisterController.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await service.createUser({ name, email, password });
  res.status(201).json(response(null, 'User Registered! Please log in.'));
});

module.exports = RegisterController;