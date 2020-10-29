
var express = require('express');


module.exports = function(app) {
    var userController    = require('../controller/userController');
    var apiRouter = express.Router();
    var routerV1 = express.Router();
    var routerV2 = express.Router();

    app.use('/admin', apiRouter);
    apiRouter.use("/v1", routerV1);
    apiRouter.use("/v2", routerV2);
	
 // Routes
/**
 * @swagger
 * /admin/v1/users:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
    routerV1.route('/users').get(userController.getUsersV1);   

/**
 * @swagger
 * /admin/v2/users:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */	
    routerV2.route('/users').get(userController.getUsersV2);
     
   
}
