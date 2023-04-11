const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required().label('displayName'),
    email: Joi.string().email(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i),
    password: Joi.string().min(6).required().label('password'),
    image: Joi.string(),
}).messages({
    'any.min': '{{#label}} must be at least {{#}} characters long',
});

module.exports = userSchema;