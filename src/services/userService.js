const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const error = require('../utils/errors');

const checkUser = async (email) => {
    const data = await User.findOne({
        where: { email },
    });

    return data;
};

const register = async ({ displayName, email, password, image = null }) => {
    if (await checkUser(email)) throw error(409, 'User already registered');
    await User.create({ displayName, email, password, image });
    const token = generateToken({ displayName, email, password, image });
    return token;
    };

const findAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const find = async (id) => {
    const user = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] },
    });
    if (!user) throw error(404, 'User does not exist');
    return user;
};

module.exports = {
    register,
    findAllUsers,
    find,
};