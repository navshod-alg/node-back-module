const Joi = require("joi");

const roleSchema = Joi.object({
  name: Joi.string()
    .required(),
  description: Joi.string()
    .required()
});

const userRoleSchema = Joi.object({
  user_id: Joi.number().integer()
    .required(),
  role_id: Joi.number().integer()
    .required()
});

module.exports = {
	roleSchema,
	userRoleSchema
}