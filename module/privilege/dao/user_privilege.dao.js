const {daoParamsDestructor} = require(ROOT_DIR + "/starter/exporter/util");

const userPrivilegeModel = require("../model/user_privilege.model.js");

async function create(data, params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.create(data, params);
}
async function update(data, params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.update(data, params);
}
async function remove(params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.destroy(params);
}
async function find(params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.findOne(params);
}
async function findSeveral(params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.findAndCountAll(params);
}
async function findAll(params){
	params = daoParamsDestructor(params);
	return userPrivilegeModel.findAll(params);
}
module.exports = {
	create,
	update,
	remove,
	find,
	findSeveral,
	findAll
};