const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const sex = Joi.string().max(1);
const age = Joi.number().integer();
const address = Joi.string();
const email = Joi.string();
const userId = Joi.number().integer();
const pictureId = Joi.number().integer();

const createAuthorSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  sex: sex.required(),
  age: age.required(),
  address: address.required(),
  email: email.required(),
  userId,
  pictureId
});

const updateAuthorSchema = Joi.object({
  name,
  lastName,
  sex,
  age,
  address,
  email,
  userId,
  pictureId
});

const getAuthorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAuthorSchema, updateAuthorSchema, getAuthorSchema }
