const {daoParamsDestructor} = require(ROOT_DIR + "/starter/exporter/util");

const userRoleModel = require("../model/user_role.model.js");

async function create(data, params){
	params = daoParamsDestructor(params);
	return userRoleModel.create(data, params);
}
async function update(data, params){
	params = daoParamsDestructor(params);
	return userRoleModel.update(data, params);
}
async function remove(params){
	params = daoParamsDestructor(params);
	return userRoleModel.destroy(params);
}
async function find(params){
	params = daoParamsDestructor(params);
	return userRoleModel.findOne(params);
}
async function findSeveral(params){
	params = daoParamsDestructor(params);
	return userRoleModel.findAndCountAll(params);
}
async function findAll(params){
	params = daoParamsDestructor(params);
	return userRoleModel.findAll(params);
}

module.exports = {
	create,
	update,
	remove,
	find,
	findSeveral,
	findAll
};