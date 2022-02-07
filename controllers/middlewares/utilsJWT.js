require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createToken = (data) => {
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const token = jwt.sign({ data }, secret, jwtConfig);

    return token;
};

const verifyToken = (token) => {
    const decoded = jwt.verify(token, secret);
    
    return decoded;
};

module.exports = {
    createToken,
    verifyToken,
};