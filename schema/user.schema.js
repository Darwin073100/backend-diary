const Joi = require('joi');

const id = Joi.number().integer();
const userName = Joi.string();
const userPassword = Joi.string().min(8);
const createdAt = Joi.date();

const createUserSchema = Joi.object({
  userName: userName.required(),
  userPassword: userPassword.required(),
  createdAt,
});

const updateUserSchema = Joi.object({
  userName,
  userPassword,
  createdAt,
});

const getUserSchema = Joi({
  id: id.required()
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
};
