const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const error = require('../utils/errors');

const authenticate = async (email, password) => {
    const user = await User.findOne({
        where: { email },
    });

    const verifyPassword = await User.findOne({
        where: { password },
    });

    if (!verifyPassword) throw error(400, 'Some required fields are missing');

    if (!user || user.password !== password) throw error(400, 'Invalid fields');

    const token = generateToken(user.dataValues);

    return token;
};

module.exports = {
    authenticate,
};