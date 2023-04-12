const categoryRouter = require('express').Router();
const categoryController = require('../controller/categoryController');
const { userTokenGenerator } = require('../middlewares/userValidator');

categoryRouter.post('/', userTokenGenerator, categoryController.insert);

module.exports = categoryRouter;
