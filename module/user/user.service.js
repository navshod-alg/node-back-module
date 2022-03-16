const {Sequelize} = require("sequelize");
const bcrypt = require("bcrypt");

const userDAO = require("./user.dao.js");

async function create(user, params){
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

async function update(user, params){
	try {
		if(user.password){
			user.password = await bcrypt.hash(user.password, 14);
		}
		await userDAO.update(user, params);
	} catch(error){
		console.log(error);
	}
};

async function remove(params){
	try {
		await userDAO.remove(params);
	} catch(error){
		console.log(error);
	}
};

async function getOne(params){
	try {
		const data = await userDAO.find(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getSeveral(params){
	try {
		const data = await userDAO.findSeveral(params);
		if(!data) console.log("NO DATA");
		return data;
	} catch(error){
		console.log(error);
	}
};

async function getAll(params){
	try {
		const data = await userDAO.findAll(params);
		if(!data) console.log("NO DATA");
		return data;
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
	getAll
};