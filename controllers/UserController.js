const { Router } = require('express');
const UserController = new Router();

UserController.get('/', (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});
module.exports = UserController;
