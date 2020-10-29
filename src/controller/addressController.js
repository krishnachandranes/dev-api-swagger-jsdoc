const addressRisk = require('../models/addressRisk')
exports.getAddressV1 = function(req, res) {
   
    res.json({
        "anotherKey": "V1 Address",
        "key": "V1"
     });
     
 };

 exports.getAddressV2 = function(req, res) {
     res.json({
        "anotherKey": "V2 Address",
        "key": "V2"
     }); 
      
 };
 
  exports.getAddressRisk = function(req, res) {
	  console.log('getAddressRisk');
	  var response= addressRisk.getAddressRisk;
	  console.log('getAddressRisk'+response);
      res.json(response); 
      
 };



