const validateCategoryIds = (req, res, next) => {
    const { categoryIds } = req.body;
  
    if (!categoryIds) return res.status(400).send({ message: '"categoryIds" is required' });

    next();
};

const validateContent = (req, res, next) => {
    const { content } = req.body;

    if (!content) return res.status(400).send({ message: '"content" is required' });

    next();
};

const validateTitle = (req, res, next) => {
    const { title } = req.body;

    if (!title) return res.status(400).send({ message: '"title" is required' });

    next();
};

const validateUpdate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title) return res.status(400).send({ message: '"title" is required' });

    if (!content) return res.status(400).send({ message: '"content" is required' });

    if (categoryIds) return res.status(400).send({ message: 'Categories cannot be edited' });

    next();
};

module.exports = { validateCategoryIds,
validateContent,
validateTitle,
validateUpdate };