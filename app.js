const express = require('express');
const swaggerUi = require('swagger-ui-express')
const app = express();
app.use(express.json());
//const swaggerFile = require('./swagger_output.json')
const swaggerJSDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser')
var routeUser = require('./src/routes/routeUser');
var routesAddress = require('./src/routes/routeAddress');

//userController    = require('./src/controller/userController');

const swaggerDefinition = {
info: {
    // API informations (required)
    title: 'WNC API', // Title (required)
    version: 'V1', // Version (required)
    description: 'A WNC API for Insurance', // Description (optional)
	concat:{name:'Amazing API developer'},
  },
 // host, // Host (optional)
 // basePath: '/', // Base path (optional)
 servers:["http://localhost:3000"]
};
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/route*.js'], // <-- not in the definition, but in the options
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
 app.get('/', (req, res) => {
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

  
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routeUser(app);
routesAddress(app);
