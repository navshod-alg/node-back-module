const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required(),
  email: Joi.string()
    .email({tlds: { allow: false }})
    .required()
});

module.exports = {
	userSchema
}