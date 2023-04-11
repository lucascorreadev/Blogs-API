const userTest = require('../joi/schema');

const userValidator = (req, res, next) => {
    const { error } = userTest.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

module.exports = {
    userValidator,
};