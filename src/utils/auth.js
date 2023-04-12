const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '3d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    try {
        const verify = jwt.verify(token, secretKey);
        return verify;
    } catch (error) {
        return error;
    }
};

module.exports = {
    generateToken,
    validateToken,
};