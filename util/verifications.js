const verifyEmailNameAndPassword = (email, name, password) => {
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
  const passwordMinLength = 6;
  const nameMinLength = 8;
  return (
    password &&
    password.toString().length >= passwordMinLength &&
    name.length >= nameMinLength &&
    emailFormat);
};

module.exports = {
  verifyEmailNameAndPassword,
};
