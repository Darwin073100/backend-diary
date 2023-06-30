const Joi = require("joi");

const id = Joi.number().integer();
const address = Joi.string();
const name = Joi.string();

const createPictureSchema = Joi.object({
  address: address.required(),
  name: name.required()
});

const updatePictureSchema = Joi.object({
  address,
  name
});

const getPictureSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPictureSchema,
  updatePictureSchema,
  getPictureSchema
};
