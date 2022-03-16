const privilegeDAO = require("./dao/privilege.dao.js");
const userPrivilegeDAO = require("./dao/user_privilege.dao.js");

async function create(privilege, params){
	try {
		await privilegeDAO.create(privilege, params);
		return;
	} catch(error){
		console.log(error);
	}
};

async function update(privilege, params){
	try {
		await privilegeDAO.update(privilege, params);
	} catch(error){
		console.log(error);
	}
};

async function remove(params){
	try {
		await privilegeDAO.remove(params);
	} catch(error){
		console.log(error);
	}
};

async function getOne(params){
	try {
		const data = await privilegeDAO.find(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getSeveral(params){
	try {
		const data = await privilegeDAO.findSeveral(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getAll(params){
	try {
		const data = await privilegeDAO.findAll(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function assign(userPrivilege, params){
	try {
		await userPrivilegeDAO.create(userPrivilege, params);
		return ;
	} catch(error){
		console.log(error);
	}
};

async function revoke(params){
	try {
		await userPrivilegeDAO.remove(params);
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