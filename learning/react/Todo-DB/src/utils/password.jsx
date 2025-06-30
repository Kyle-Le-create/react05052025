const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  const hashedPassword = bcrypt.hash(password, 10);
  return hashedPassword;
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
