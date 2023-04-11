const loginRouter = require('express').Router();
const loginController = require('../controller/loginController');

loginRouter.post('/', loginController.signIn);

module.exports = loginRouter;