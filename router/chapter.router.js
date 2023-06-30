const express = require('express');
const router = express.Router();
const ChapterService = require('../service/chapter.service');
const validationHandler = require('../middlewares/validator.handler');
const {
  createChapterSchema,
  updateChapterSchema,
  getChapterSchema
} = require('../schema/chapter.schema');

const service = new ChapterService();

router.get('/', async (req, res, next)=>{
  try {
    const chapters = await service.findAll();
    res.status(200).json(chapters);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validationHandler(getChapterSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const item = await service.findById(id);
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validationHandler(createChapterSchema, 'body'),
  async (req, res, next)=>{
    try {
      const body = req.body;
      const newItem = await service.create(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validationHandler(getChapterSchema, 'params'),
  validationHandler(updateChapterSchema, 'body'),
  async (req, res, next)=>{
    try{
      const { id } = req.params;
      const body = req.body;
      const changes = await service.update(id, body);
      res.status(200).json(changes);
    } catch(error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHandler(getChapterSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
