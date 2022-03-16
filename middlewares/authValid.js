async function validate(req, res, next){
	try {
		const tokenData = jwt.verify(req.header('x-auth-token'), 'TOKEN_SECRET');
		if(tokenData.exp > Date.now()){
			console.log("TOKEN EXPIRED");
		}
		next();
		req.body.token = tokenData;
	} catch(error){
		console.log(error);
	}
}

module.exports = validate;