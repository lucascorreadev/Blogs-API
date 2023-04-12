const userTest = require('../joi/schema');
const { validateToken } = require('../utils/auth');
const err = require('../utils/errors');

const userValidator = (req, res, next) => {
    const { error } = userTest.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

const userTokenGenerator = (req, res, next) => {
    console.log(req.headers);
    if (!req.headers.authorization) throw err(401, 'Token not found');
    const verify = validateToken(req.headers.authorization);
    if (!verify.email) throw err(401, 'Expired or invalid token');
  
    next();
  };

module.exports = {
    userValidator,
    userTokenGenerator,
};