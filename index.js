const app = require("express")();

global.ROOT_DIR = __dirname;

async function start(){

	require("./starter/routes/endPointsRegister.js")(app);

	const { dbMaria } = require("./config/db.js");
	await dbMaria.sync().then(() => {
		console.log("Connected to dbMaria");
	});
	require("./config/server.js")(app);
}
start();