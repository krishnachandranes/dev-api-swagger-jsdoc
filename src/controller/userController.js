
exports.getUsersV1 = function(req, res) {
   
    res.json({
        "anotherKey": "V1 anotherValue",
        "key": "V1"
     });
     
 };

 exports.getUsersV2 = function(req, res) {
     res.json({
        "anotherKey": "V2 anotherValue",
        "key": "V2"
     }); 
      
 };



