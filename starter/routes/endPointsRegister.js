const jsonParser = require("body-parser").json();
const endPointsLists = require("./endPointsList.js");

function routeRegister(app){
	app.use(jsonParser);

	for(const {url, route, middlewares} of endPointsLists){
		middlewares.forEach(middleware => middleware = require(middleware));
		app.use(url, middlewares, require(route));
	}
}

module.exports = routeRegister;
