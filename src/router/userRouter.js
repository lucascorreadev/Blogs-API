const userRouter = require('express').Router();
const userController = require('../controller/userController');
const { userValidator, userTokenGenerator } = require('../middlewares/userValidator');

userRouter.post('/', userValidator, userController.register);
userRouter.get('/', userTokenGenerator, userController.findAllUsers);

module.exports = userRouter;