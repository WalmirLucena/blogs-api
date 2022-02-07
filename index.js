const express = require('express');
const bodyParser = require('body-parser');
const { 
  validateEmail, 
  validateName, 
  validatePassword, 
  validateJWT } = require('./controllers/middlewares/userValidations');

const { createUser, login, getAll, getById } = require('./controllers/userController');
const CategoryController = require('./controllers/categoryController'); 

const app = express();

app.use(bodyParser.json());

app.post('/user', validateName, validateEmail, validatePassword, createUser);
app.post('/login', validateEmail, validatePassword, login);
app.get('/user', validateJWT, getAll);
app.get('/user/:id', validateJWT, getById);
app.post('/categories', validateJWT, CategoryController.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
