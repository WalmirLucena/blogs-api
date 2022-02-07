const UserService = require('../service/userService');

const createUser = async (req, res) => {
    try {
    const newUser = await UserService.createUser(req.body);

    if (newUser.message) return res.status(409).send({ message: newUser.message });

    return res.status(201).json({ token: newUser });
    } catch (err) {
        res.status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};

const login = async (req, res) => {
    try {
        const loginUser = await UserService.login(req.body);

        if (loginUser.message) return res.status(400).send({ message: loginUser.message });

        return res.status(200).json({ token: loginUser });
    } catch (err) {
        res.status(500)
      .json({ message: 'Erro ao fazer login', error: err.message });
    }
};

const getAll = async (_req, res) => {
    try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
    } catch (err) {
        return res.status(500)
        .json({ message: 'Erro ao listar todos Users', error: err.message });
    }
};

module.exports = {
    createUser,
    login,
    getAll,
};