
const authService = require("./auth.service.js");

async function signUp(req, res){
	authService.signUp(req.body.user);
	res.status(200).send({status: true});
};
async function signIn(req, res){
	const token = await authService.signIn(req.body.user.username, req.body.user.password);
	res.status(200).send({status: true, "x-auth-token": token});
};
async function signOut(){};

module.exports = {
	signUp,
	signIn,
	signOut
}
