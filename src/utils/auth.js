const jwt = require('jsonwebtoken');

const configJWT = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, configJWT);
    console.log(token);
    return token;
};

module.exports = generateToken;