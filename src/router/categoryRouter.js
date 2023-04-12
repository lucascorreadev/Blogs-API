const categoryRouter = require('express').Router();
const categoryController = require('../controller/categoryController');
const { userTokenGenerator } = require('../middlewares/userValidator');

categoryRouter.post('/', userTokenGenerator, categoryController.insert);
categoryRouter.get('/', userTokenGenerator, categoryController.getAll);

module.exports = categoryRouter;
