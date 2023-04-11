const userRouter = require('express').Router();
const userController = require('../controller/userController');
const { userValidator } = require('../middlewares/userValidator');

userRouter.post('/', userValidator, userController.register);

module.exports = userRouter;