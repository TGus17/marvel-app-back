const verifyEmailAndPassword = (email, password) => {
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  const passwordMinLength = 6;
  return (
    password &&
    password.toString().length >= passwordMinLength &&
    emailFormat);
};

module.exports = verifyEmailAndPassword;
