const loginService = require('../services/loginService');

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login = await loginService.authenticate(email, password);
        return res.status(200).json({ token: login });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    signIn,
};