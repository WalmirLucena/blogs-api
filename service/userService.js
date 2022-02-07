const createToken = require('../controllers/middlewares/createToken');
const { User } = require('../models');

const createUser = async (user) => {
    const { displayName, email, password, image } = user;

    const userRegistered = await User.findOne({ where: { email } });
    
    if (userRegistered) return ({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
    
    const token = createToken(newUser);

    return token;
};

const login = async (data) => {
    const { email } = data;

    const userRegistered = await User.findOne({ where: { email } });

    if (!userRegistered) return ({ message: 'Invalid fields' });

    const token = createToken(userRegistered);

    return token;
};

module.exports = {
    createUser,
    login,
};