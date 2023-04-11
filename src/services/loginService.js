const { User } = require('../models');

const generateToken = require('../utils/auth');

const errorRequired = {
    message: 'Some required fields are missing',
  };

const errorInvalid = {
    message: 'Invalid fields',
  };

const authenticate = async (email, password) => {
    const user = await User.findOne({
        where: { email },
    });

    const verifyPassword = await User.findOne({
        where: { password },
    });

    console.log(user);

    if (!verifyPassword) throw errorRequired;
    if (!user || user.password !== password) {
        throw errorInvalid;
      }

    const token = generateToken(user.dataValues);

    return token;
};

module.exports = {
    authenticate,
};