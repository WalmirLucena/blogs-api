const categoryService = require('../service/categoryService');

const create = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).send({ message: '"name" is required' });

    const category = await categoryService.create(name);
    
    return res.status(201).json(category);
};

const getAll = async (req, res) => {
    try {
        const categories = await categoryService.getAll();
    
        return res.status(200).json(categories);
        } catch (err) {
            return res.status(500)
            .json({ message: 'Erro ao listar todas Categorias', error: err.message });
        }
};

module.exports = {
    create,
    getAll,
};