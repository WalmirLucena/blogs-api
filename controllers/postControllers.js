const PostService = require('../service/postService');
const CategoryService = require('../service/categoryService');
const { decodeToken } = require('../middlewares/utilsJWT');

const create = async (req, res) => {
    try {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;
    
    const searchCategory = await CategoryService.findCategories(categoryIds);

    if (searchCategory === false) {
    return res.status(400)
    .send({ message: '"categoryIds" not found' });
    }
    
    const { data: { id: userId } } = decodeToken(authorization);
    
    const newPost = { userId, title, content };
    
    const createPost = await PostService.create(newPost);

    return res.status(201).json(createPost);
} catch (err) {
    res.status(500)
    .json({ message: 'Erro ao criar blogPosts', error: err.message });
}
};

const getAll = async (_req, res) => {
    try {
    const users = await PostService.getAll();

    return res.status(200).json(users);
    } catch (err) {
        return res.status(500)
        .json({ message: 'Erro ao listar todos Posts', error: err.message });
    }
};

module.exports = { create, getAll };