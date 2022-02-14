const { createToken } = require('../middlewares/utilsJWT');
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

const getAll = async () => {
   const users = await User.findAll();

   return users;
};

const getById = async (id) => {
    const user = await User.findOne({ where: { id } });
     
    return user;
};

const remove = async (id) => {
    const result = await User.destroy({
        where: {
           id: Number(id),
        },
     });
     return result;
};

module.exports = {
    createUser,
    login,
    getAll,
    getById,
    remove,
};