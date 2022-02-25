const express = require('express');
const { validateName, 
    validateEmail, 
    validatePassword, 
    validateJWT } = require('../middlewares/userValidations');
const { createUser, getAll, getById, remove } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, createUser);
userRouter.get('/:id', validateJWT, getById);
userRouter.get('/', validateJWT, getAll);
userRouter.delete('/me', validateJWT, remove);

module.exports = userRouter;