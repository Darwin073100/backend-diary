const Joi = require("joi");

const id = Joi.number().integer();
const text = Joi.string();
const createdAt = Joi.date();
const diaryId = Joi.number().integer();
const pictureId = Joi.number().integer();

const createChapterSchema = Joi.object({
  text: text.required(),
  createdAt,
  diaryId: diaryId.required(),
  pictureId,
});

const updateChapterSchema = Joi.object({
  text,
  createdAt,
  diaryId,
  pictureId,
});

const getChapterSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createChapterSchema,
  updateChapterSchema,
  getChapterSchema
};
