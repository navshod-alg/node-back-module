const privilegeService = require("./privilege.service.js");

const { schemaValidator } = require(ROOT_DIR + "/starter/exporter/util");

const { privilegeSchema, userPrivilegeSchema } = require("./privilege.schemas");

async function create(req, res){
	if(!schemaValidator(privilegeSchema, req.body.privilege)) console.log("PRIVILEGE NOT VALID");
	await privilegeService.create(req.body.privilege);
	res.send({status: true});
};

async function update(req, res){
	await privilegeService.update(req.body.privilege, {where: req.params});
	res.send({status: true});
};

async function remove(req, res){
	await privilegeService.remove({where: req.params});
	res.send({status: true});
};

async function getOne(req, res){
	const respData = await privilegeService.getOne({where: req.params});
	res.send({status: true, data: respData});
};

async function getSeveral(req, res){
	const respData = await privilegeService.getSeveral({where: req.query});
	res.send({status: true, data: respData});
};

async function getAll(req, res){
	const respData = await privilegeService.getAll({where: req.query});
	res.send({status: true, data: respData});
};

async function assign(req, res){
	if(!schemaValidator(userPrivilegeSchema, req.body.user_privilege)) console.log("ASSIGN NOT VALID");
	await privilegeService.assign(req.body.user_privilege);
	res.send({status: true});
};

async function revoke(req, res){
	if(!schemaValidator(userPrivilegeSchema, req.body.user_privilege)) console.log("REVOKE NOT VALID");
	await privilegeService.revoke({where: req.body.user_privilege});
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