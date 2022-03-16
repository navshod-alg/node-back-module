const Joi = require("joi");

const privilegeSchema = Joi.object({
  name: Joi.string()
    .required(),
  description: Joi.string()
    .required()
});

const userPrivilegeSchema = Joi.object({
  user_id: Joi.number().integer()
    .required(),
  privilege_id: Joi.number().integer()
    .required()
});

module.exports = {
	privilegeSchema,
	userPrivilegeSchema
}