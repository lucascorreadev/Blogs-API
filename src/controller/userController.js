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

const findUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.find(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

module.exports = {
    register,
    findAllUsers,
    findUser,
};