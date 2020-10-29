
var db = require('../../config/db');

const getAddressRisk = (request, response) => {
	console.log('getAddressRisk');
//var query=
 db.query("select (api_rules_rules -> ''countyrule''-> ''exclude''->>''response'',) as response from api_rules where (api_rules_rules -> ''countyrule''-> ''exclude''->''countyexcludelist'')::jsonb ? ''Jefferson''", (error, results) => {
   if (error) {
     throw error
   }
   console.log('results'+results);
   response.status(200).json(results.rows)
 })
}

module.exports = {
 getAddressRisk
}