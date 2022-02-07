const categoryService = require('../service/categoryService');

const create = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).send({ message: '"name" is required' });

    const category = await categoryService.create(name);
    
    return res.status(201).json(category);
};

module.exports = {
    create,
};