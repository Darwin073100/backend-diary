const express = require('express');
const router = express.Router();
const DiaryService = require('../service/diary.service');
const validationHanldler = require('../middlewares/validator.handler');
const {
  createDiarySchema,
  updateDiarySchema,
  getDiarySchema
} = require('../schema/diary.schema');

const service = new DiaryService();

router.get('/', async(req, res, next)=>{
  try{
    const diaries = await service.findAll();
    res.status(200).json(diaries);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
  validationHanldler(getDiarySchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const item = await service.findById(id);
      res.status(200).json(item)
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validationHanldler(createDiarySchema, 'body'),
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
  validationHanldler(getDiarySchema, 'params'),
  validationHanldler(updateDiarySchema, 'body'),
  async (req, res, next)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const changes = await service.update(id, body);
      res.status(200).json(changes);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHanldler(getDiarySchema, 'params'),
  async (req, res, next)=>{
    try{
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch(error) {
      next(error);
    }
  }
);

module.exports = router;
