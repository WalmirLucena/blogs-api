const express = require('express');
const { validateEmail, 
    validatePassword } = require('../middlewares/userValidations');
const { login } = require('../controllers/userController');

const loginRouter = express.Router();

loginRouter.post('/', validateEmail, validatePassword, login);

module.exports = loginRouter;