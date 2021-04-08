const { Router } = require('express');
const RegisterController = new Router();
const service = require('../services/UserService');

RegisterController.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await service.createUser({ name, email, password });
  res.status(201).json(user);
});

module.exports = RegisterController;