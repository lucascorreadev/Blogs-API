const { User } = require('../models');
const generateToken = require('../utils/auth');

const error = {
    message: 'User already registered',
  };

const checkUser = async (email) => {
    const data = await User.findOne({
        where: { email },
    });

    return data;
};

const register = async ({ displayName, email, password, image = null }) => {
    if (await checkUser(email)) throw error;
    await User.create({ displayName, email, password, image });
    const token = generateToken({ displayName, email, password, image });
    return token;
    };

module.exports = {
    register,
};