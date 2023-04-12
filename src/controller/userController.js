const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const login = await userService.register(req.body);
        return res.status(201).json({ token: login });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

const findAllUsers = async (req, res) => {
    const user = await userService.findAllUsers();
    return res.status(200).json(user);
};

module.exports = {
    register,
    findAllUsers,
};