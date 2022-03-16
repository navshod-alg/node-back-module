const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { userDAO } = require(ROOT_DIR + "/starter/exporter/dao");

async function signUp(user, params){
	try {
		await bcrypt.hash(user.password, 14).then(async hash => {
			user.password = hash;
			await userDAO.create(user, params);
			return;
		});
	} catch(error){
		console.log(error);
	}
};

async function signIn(username,  password){
	try {
		const user = await userDAO.find({where: {username: username}});
		if(!user) console.log("NO USER FOUND");
		const check = await bcrypt.compare(password, user.password);
		if(!check) console.log("PASSWORD NOT CORRECT");
		const token = jwt.sign({
		  username: user.username,
		  user_id: user.id,
		  email: user.email
		}, 'TOKEN_SECRET', /*{ expiresIn: '1 day' }*/);
		return token;
	} catch(error) {
		console.log(error);
	}
};

async function signOut(){

};

module.exports = {
	signUp,
	signIn,
	signOut
}
