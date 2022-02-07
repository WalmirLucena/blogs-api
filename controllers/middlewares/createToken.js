require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const jwtConfig = {
        expiresIn: '3h',
        algorithm: 'HS256',
    };

    const secret = process.env.JWT_SECRET;

    const token = jwt.sign({ data }, secret, jwtConfig);

    return token;
};

module.exports = createToken;