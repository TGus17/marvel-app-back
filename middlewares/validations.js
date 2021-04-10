const { verifyEmailAndPassword, response } = require('../util');
const { findUserByEmail } = require('../services/UserService');
const validateToken = require('../auth/validateToken');

const validateDatas = (req, res, next) => {
  const { email, password } = req.body;
  if (!verifyEmailAndPassword(email, password)) return res
    .status(400).json(response(true, 'Invalid datas'));
  return next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res
    .status(400).json(response(true, 'Invalid datas'));
  return next();
}

const validateNewUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);

  if (user !== null) return res.status(400).json(response(true, 'User already registered'));
  return next();
}

const deliverUserWithValidToken = (req, res, next) => {
  const { authorization } = req.headers;
  const validUser = validateToken(authorization);
  if (!validUser) return res.status(404).json(response(true, 'Invalid Token'));
  req.user = validUser;
  return next();
}

module.exports = {
  validateDatas,
  validateName,
  validateNewUser,
  deliverUserWithValidToken,
};
