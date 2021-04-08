require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = createToken;
