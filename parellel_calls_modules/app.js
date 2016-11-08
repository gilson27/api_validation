/**
  @file Test Template that contains URLs and POST data
  @author <gilsonvarghese7@gmail.com>
  @version v1.0.0
*/

/**
  module imports
*/ 
var template = require("./test_template/template");
var httpClient = require("./request/client");

/**
  Run the test suite
  @function 
  @param {JSON} testTemplate The teplate that contains URLs and corresponding
		request Parameters
*/

var runTest = function(testTemplate) {
  var keyArray = Object.keys(testTemplate);
  var iterator = 0;
  keyArray.some(function(key) {
		var count = testTemplate[key].count;
    var requestParams = {};
    if(count == 0) {
      return false;
    } 	
		requestParams.label = testTemplate[key].label;
		requestParams.host = testTemplate[key].host;
		requestParams.port = testTemplate[key].port;
		requestParams.method = testTemplate[key].method;
		requestParams.path = testTemplate[key].path; 
		requestParams.body = testTemplate[key].body;
    for(iterator = 0; iterator < count; ++iterator) {
			console.log("R ", requestParams.label, " ", iterator);
      requestParams.iterator = iterator; 
  	  httpClient.sendRequest(requestParams);		
		}
  });
};

/**
  Initialize the test suite
  @function 
*/

var initTest = function() {
	console.log("Started Test @ ", new Date().toString());
  runTest(template);	
};

/**
  @export initTest
*/

module.exports.initTest = initTest;
module.exports.runTest = runTest;

