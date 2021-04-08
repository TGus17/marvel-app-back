const createToken = require('../auth/createToken');

const deliverToken = (user) => {
  const { password, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPassword);
  return token;
}

module.exports = deliverToken;
