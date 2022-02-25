const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');
const categoriesRouter = require('./router/categoriesRouter');
const postRouter = require('./router/postRouter');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
