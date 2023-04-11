const router = require('express').Router();
const loginRouter = require('./loginRouter');

router.use('/login', loginRouter);

module.exports = router;