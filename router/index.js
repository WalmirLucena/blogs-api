const express = require('express');
const categoriesRouter = require('./categoriesRouter');
const loginRouter = require('./loginRouter');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;