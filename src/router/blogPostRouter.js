const blogPostRouter = require('express').Router();
const blogPostController = require('../controller/blogPostController');
const { userTokenGenerator } = require('../middlewares/userValidator');

blogPostRouter.post('/', blogPostController.insert);
blogPostRouter.get('/', userTokenGenerator, blogPostController.getAll);

module.exports = blogPostRouter;