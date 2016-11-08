/**
  @file Test Template that contains URLs and POST data
  @author <gilsonvarghese7@gmail.com>
  @version v1.0.0
*/

/**
  Template to specify API calls and request data
  @namespace
*/

var testTemplate = {
  1: {
		label: "test",
 		host: "localhost",
		port: 3000,
    method: "POST",
    path: "/uri",
	  body: {
      "value": true
    },
    count: 10
  }
};

module.exports = testTemplate;
