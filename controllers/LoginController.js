const { Router } = require('express');
const { findUserByEmail } = require('../services/UserService');
const deliverToken = require('../util/deliverToken');
const LoginController = new Router();

LoginController.post('/', async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (user === null || user.password != req.body.password) return res.status(404).json({ message: 'Invalid datas' });
  const token = deliverToken(user);
  return res.status(200).json({ token });
})

module.exports = LoginController;
