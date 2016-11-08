/**
  @file Module to send HTTP requests
  @author <gilsonvarghese7@gmail.com>
  @version v1.0.0
*/

/**
  module imports
*/ 
var http = require("http");
 
/**
  send generic HTTP Request 
  @function
  @param {JSON} requestParameters The details of the request
*/

var sendRequest = function(requestParameters) {
  var client = http;
	var options = {};
	var request = null;
  var resData = ""; 
	var dateObject = new Date();
	var recvTime = 0;
  var sendTime = dateObject.getTime();
	var iterator = requestParameters.iterator;
	options.method = requestParameters.method;
  options.hostname = requestParameters.host;
  options.port = requestParameters.port;
  options.path = requestParameters.path;
	options.headers = {
		"Content-Type": "appplication/json"
  };
	/**
		Send request
	*/
	request = client.request(options, function(res) {
		res.on("data", function(chunk) {
			resData += chunk;
		});

		res.on("end", function(){
			dateObject = new Date();
			recvTime = dateObject.getTime();  
			console.log("iterator " + iterator + " received data = " + resData + " time = " + (recvTime-sendTime));
		});
  });

	/**
		Write request body
	*/
	request.write(JSON.stringify(requestParameters.body));
	request.end();
	request.on("error", function(err){
		console.log("error", err);
	});
};

/**
	@exports
*/

module.exports.sendRequest = sendRequest;

