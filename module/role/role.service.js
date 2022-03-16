const roleDAO = require("./dao/role.dao.js");
const userRoleDAO = require("./dao/user_role.dao.js");

async function create(role, params){
	try {
		await roleDAO.create(role, params);
		return;
	} catch(error){
		console.log(error);
	}
};

async function update(role, params){
	try {
		await roleDAO.update(role, params);
	} catch(error){
		console.log(error);
	}
};

async function remove(params){
	try {
		await roleDAO.remove(params);
	} catch(error){
		console.log(error);
	}
};

async function getOne(params){
	try {
		const data = await roleDAO.find(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getSeveral(params){
	try {
		const data = await roleDAO.findSeveral(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getAll(params){
	try {
		const data = await roleDAO.findAll(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function assign(userRole, params){
	try {
		await userRoleDAO.create(userRole, params);
		return ;
	} catch(error){
		console.log(error);
	}
};

async function revoke(params){
	try {
		await userRoleDAO.remove(params);
		return ;
	} catch(error){
		console.log(error);
	}
};

module.exports = {
	create,
	update,
	remove,
	getOne,
	getSeveral,
	getAll,
	assign,
	revoke
};