function startServer(app){
	const server = require("http").createServer(app);
	server.listen(4444, "localhost", () => {
		console.log("Listening on 4444");
	})
}

module.exports = startServer;