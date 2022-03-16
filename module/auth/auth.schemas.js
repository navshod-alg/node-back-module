const Joi = require("joi");

const signUpSchema = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required()
});
const signInSchema = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required()
});

module.exports = {
	signUpSchema,
	signInSchema
}