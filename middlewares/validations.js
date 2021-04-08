const { verifyEmailAndPassword } = require('../util/verifications');
const { findUserByEmail } = require('../services/UserService');

const validateDatas = (req, res, next) => {
  const { email, password } = req.body;
  if (!verifyEmailAndPassword(email, password)) return res
    .status(400).json({ message: 'Invalid datas' });
  return next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res
    .status(400).json({ message: 'Invalid datas' });
  return next();
}

const validateNewUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);

  if (user !== null) return res.status(400).json({ message: 'User already registered' });
  return next();
}

module.exports = {
  validateDatas,
  validateName,
  validateNewUser,
};
