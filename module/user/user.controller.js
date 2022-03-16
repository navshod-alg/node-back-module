const sequelize = require("sequelize");

const { schemaValidator } = require(ROOT_DIR + "/starter/exporter/util");

const { userSchema } = require("./user.schemas");

const userService = require("./user.service.js");

async function create(req, res){
	if(!schemaValidator(userSchema, req.body.user)) console.log("USER NOT VALID");
	await userService.create(req.body.user);
	res.send({status: true});
};

async function update(req, res){
	await userService.update(req.body.user, {where: req.params});
	res.send({status: true});
};

async function remove(req, res){
	await userService.remove({where: req.params});
	res.send({status: true});
};

async function getOne(req, res){
	const respData = await userService.getOne({where: req.params});
	res.send({status: true, data: respData});
};

async function getSeveral(req, res){
	const respData = await userService.getSeveral({where: req.query});
	res.send({status: true, data: respData});
};

async function getAll(req, res){
	const respData = await userService.getAll({where: req.query});
	res.send({status: true, data: respData});
};

module.exports = {
	create,
	update,
	remove,
	getOne,
	getSeveral,
	getAll
};