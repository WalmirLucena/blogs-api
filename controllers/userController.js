require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const CreateUser = async (req, res) => {
    try {
    const { displayName, email, password, image } = req.body;
    console.log('Antes: ', email);
    const userRegistered = await User.findOne({ where: { email } });
    console.log('depois: ', userRegistered);
    if (userRegistered) return res.status(409).send({ message: 'User already registered' });
    const newUser = await User.create({ displayName, email, password, image });
    const jwtConfig = {
        expiresIn: '3h',
        algorithm: 'HS256',
    };

    const secret = process.env.JWT_SECRET;

    const token = jwt.sign({ data: newUser }, secret, jwtConfig);

    return res.status(201).send({ token });
    } catch (err) {
        res.status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
    };

module.exports = {
    CreateUser,
};