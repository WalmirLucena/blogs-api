require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async (user) => {
    const { displayName, email, password, image } = user;

    const userRegistered = await User.findOne({ where: { email } });
    console.log(userRegistered, '9');

    if (userRegistered) return ({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
    const jwtConfig = {
        expiresIn: '3h',
        algorithm: 'HS256',
    };

    const secret = process.env.JWT_SECRET;

    const token = jwt.sign({ data: newUser }, secret, jwtConfig);

    return token;
};

module.exports = {
    createUser,
};