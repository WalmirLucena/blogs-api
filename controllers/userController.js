const UserService = require('../service/userService');

const createUser = async (req, res) => {
    try {
    const newUser = await UserService.createUser(req.body);
    console.log(newUser.message, '6');

    if (newUser.message) return res.status(409).send({ message: newUser.message });

    return res.status(201).json({ token: newUser });
    } catch (err) {
        res.status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
    };

module.exports = {
    createUser,
};