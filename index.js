const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const router = require('./router');

const app = express();

app.use(bodyParser.json());

app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', router);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

module.exports = app;