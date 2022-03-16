function validate(schema, data){
	const {error, value} = schema.validate(data);
	if(error){
		console.log(error);
		return false;
	}
	return true;
};

module.exports = validate;