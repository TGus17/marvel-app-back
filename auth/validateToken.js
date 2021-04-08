require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const validateToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch(_err) {
    return null;
  }
};

module.exports = validateToken;
