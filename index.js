const express = require('express');
const bodyParser = require('body-parser');
const { 
  validateEmail, 
  validateName, 
  validatePassword, 
  validateJWT } = require('./middlewares/userValidations');

const { createUser, login, getAll, getById, remove } = require('./controllers/userController');
const CategoryController = require('./controllers/categoryController');
const PostController = require('./controllers/postControllers'); 
const { validateTitle, 
  validateCategoryIds, 
  validateContent, 
  validateUpdate } = require('./middlewares/postsValidation');

const app = express();

app.use(bodyParser.json());

app.post('/user', validateName, validateEmail, validatePassword, createUser);
app.post('/login', validateEmail, validatePassword, login);
app.get('/user', validateJWT, getAll);
app.get('/user/:id', validateJWT, getById);
app.delete('/user/me', validateJWT, remove);

app.post('/categories', validateJWT, CategoryController.create);
app.get('/categories', validateJWT, CategoryController.getAll);

app.post('/post', validateJWT, 
  validateTitle, 
  validateCategoryIds, 
  validateContent, PostController.create);
app.get('/post', validateJWT, PostController.getAll);
app.get('/post/:id', validateJWT, PostController.getById);
app.put('/post/:id', validateJWT, validateUpdate, PostController.update);
app.delete('/post/:id', validateJWT, PostController.remove);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
