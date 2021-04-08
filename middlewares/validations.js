const { verifyEmailNameAndPassword } = require('../util/verifications');
const { findUserByEmail } = require('../services/UserService');

const validateDatas = (req, res, next) => {
  const { email, name, password } = req.body;
  if (!verifyEmailNameAndPassword(email, name, password)) return res
    .status(400).json({ message: 'Invalid datas' });
  return next();
};

const validateNewUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);

  if (user !== null) return res.status(400).json({ message: 'User already registered' });
  return next();
}

module.exports = {
  validateDatas,
  validateNewUser,
};
