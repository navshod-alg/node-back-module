const {daoParamsDestructor} = require(ROOT_DIR + "/starter/exporter/util");

const userModel = require("./user.model.js");

async function create(data, params){
	params = daoParamsDestructor(params);
	return userModel.create(data, params);
}
async function update(data, params){
	params = daoParamsDestructor(params);
	return userModel.update(data, params);
}
async function remove(params){
	params = daoParamsDestructor(params);
	return userModel.destroy(params);
}
async function find(params){
	params = daoParamsDestructor(params);
	return userModel.findOne(params);
}
async function findSeveral(params){
	params = daoParamsDestructor(params);
	return userModel.findAndCountAll(params);
}
async function findAll(params){
	params = daoParamsDestructor(params);
	return userModel.findAll();
}

module.exports = {
	create,
	update,
	remove,
	find,
	findSeveral,
	findAll
};