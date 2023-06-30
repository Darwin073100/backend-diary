const Joi = require("joi");

const id = Joi.number();
const title = Joi.string();
const createdAt = Joi.date();
const authorId = Joi.number();
const pictureId = Joi.number();

const createDiarySchema = Joi.object({
  title: title.required(),
  createdAt,
  authorId: authorId.required(),
  pictureId
});

const updateDiarySchema = Joi.object({
  title,
  createdAt,
  authorId,
  pictureId
});

const getDiarySchema = Joi.object({
  id: id.required()
});

module.exports = {
  createDiarySchema,
  updateDiarySchema,
  getDiarySchema
};
