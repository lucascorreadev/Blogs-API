const router = require('express').Router();
const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;