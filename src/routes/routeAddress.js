
var express = require('express');


module.exports = function(app) {
    var addressController    = require('../controller/addressController');
    var apiRouter = express.Router();
    var routerV1 = express.Router();
    var routerV2 = express.Router();

    app.use('/address', apiRouter);
    apiRouter.use("/v1", routerV1);
    apiRouter.use("/v2", routerV2);
	
 // Routes
/**
 * @swagger
 * /address/v1/addresses:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
    routerV1.route('/addresses').get(addressController.getAddressV1);   

/**
 * @swagger
 * /address/v2/addresses:
 *  get:
 *    description: Use to request all customers

 *    responses:
 *      '200':
 *        description: A successful response
 */	
    routerV2.route('/addresses').get(addressController.getAddressV2);
	

 /**
 * @swagger
 * /address/v1/addressesRisk:
 *    get:
 *      description: Use to request all address
 *    parameters:
 *      - address: address
 *        in: address
 *        description: address of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully attain the address risk
 */
    routerV1.route('/addressesRisk').get(addressController.getAddressRisk);   
     console.log('rout');
   
}
