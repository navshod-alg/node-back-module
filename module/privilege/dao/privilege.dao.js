const {daoParamsDestructor} = require(ROOT_DIR + "/starter/exporter/util");

const privilegeModel = require("../model/privilege.model.js");

async function create(data, params){
	params = daoParamsDestructor(params);
	return privilegeModel.create(data, params);
}
async function update(data, params){
	params = daoParamsDestructor(params);
	return privilegeModel.update(data, params);
}
async function remove(params){
	params = daoParamsDestructor(params);
	return privilegeModel.destroy(params);
}
async function find(params){
	params = daoParamsDestructor(params);
	return privilegeModel.findOne(params);
}
async function findSeveral(params){
	params = daoParamsDestructor(params);
	return privilegeModel.findAndCountAll(params);
}
async function findAll(params){
	params = daoParamsDestructor(params);
	return privilegeModel.findAll(params);
}

module.exports = {
	create,
	update,
	remove,
	find,
	findSeveral,
	findAll
};