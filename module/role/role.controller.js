const roleService = require("./role.service.js");

const { schemaValidator } = require(ROOT_DIR + "/starter/exporter/util");

const { roleSchema, userRoleSchema } = require("./role.schemas");

async function create(req, res){
	if(!schemaValidator(roleSchema, req.body.role)) console.log("ROLE NOT VALID");
	await roleService.create(req.body.role);
	res.send({status: true});
};

async function update(req, res){
	await roleService.update(req.body.role, {where: req.params});
	res.send({status: true});
};

async function remove(req, res){
	await roleService.remove({where: req.params});
	res.send({status: true});
};

async function getOne(req, res){
	const respData = await roleService.getOne({where: req.params});
	res.send({status: true, data: respData});
};

async function getSeveral(req, res){
	const respData = await roleService.getSeveral({where: req.query});
	res.send({status: true, data: respData});
};

async function getAll(req, res){
	const respData = await roleService.getAll({where: req.query});
	res.send({status: true, data: respData});
};

async function assign(req, res){
	if(!schemaValidator(userRoleSchema, req.body.user_role)) console.log("ASSIGN NOT VALID");
	await roleService.assign(req.body.user_role);
	res.send({status: true});
};

async function revoke(req, res){
	if(!schemaValidator(userRoleSchema, req.body.user_role)) console.log("REVOKE NOT VALID");
	await roleService.revoke({where: req.body.user_role});
	res.send({status: true});
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