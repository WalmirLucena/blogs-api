const express = require('express');
const { validateJWT } = require('../middlewares/userValidations');
const { validateTitle, 
    validateContent, 
    validateCategoryIds,
    validateUpdate } = require('../middlewares/postsValidation');
const PostController = require('../controllers/postControllers');

const postRouter = express.Router();

postRouter.post('/', validateJWT, 
    validateTitle, 
    validateCategoryIds, 
    validateContent, 
    PostController.create);
postRouter.get('/search', validateJWT, PostController.search);
postRouter.get('/:id', validateJWT, PostController.getById);
postRouter.get('/', validateJWT, PostController.getAll);
postRouter.put('/:id', validateJWT, validateUpdate, PostController.update);
postRouter.delete('/:id', validateJWT, PostController.remove);

module.exports = postRouter;