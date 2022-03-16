const {daoParamsDestructor} = require(ROOT_DIR + "/starter/exporter/util");

const roleModel = require("../model/role.model.js");

async function create(data, params){
	params = daoParamsDestructor(params);
	return roleModel.create(data, params);
}
async function update(data, params){
	params = daoParamsDestructor(params);
	return roleModel.update(data, params);
}
async function remove(params){
	params = daoParamsDestructor(params);
	return roleModel.destroy(params);
}
async function find(params){
	params = daoParamsDestructor(params);
	return roleModel.findOne(params);
}
async function findSeveral(params){
	params = daoParamsDestructor(params);
	return roleModel.findAndCountAll(params);
}
async function findAll(params){
	params = daoParamsDestructor(params);
	return roleModel.findAll(params);
}

module.exports = {
	create,
	update,
	remove,
	find,
	findSeveral,
	findAll
};