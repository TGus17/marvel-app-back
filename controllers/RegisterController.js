const { Router } = require('express');
const service = require('../services/UserService');
const deliverToken = require('../util/deliverToken');
const RegisterController = new Router();

RegisterController.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await service.createUser({ name, email, password });
  const token = deliverToken(user);
  res.status(201).json({ token });
});

module.exports = RegisterController;