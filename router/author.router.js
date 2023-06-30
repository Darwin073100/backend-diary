const express = require('express');
const router = express.Router();
const AuthorService = require('../service/author.service');
const validationHandler = require('../middlewares/validator.handler');
const {
  createAuthorSchema,
  updateAuthorSchema,
  getAuthorSchema
} = require('../schema/author.schema');

const service = new AuthorService();

router.get('/', async (req, res, next)=>{
  try {
    const authors = await service.findAll();
    res.json(authors);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validationHandler(getAuthorSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const author = await service.findById(id);
      res.status(200).json(author);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validationHandler(createAuthorSchema, 'body'),
  async (req, res, next)=>{
    try {
      const data = req.body;
      const newItem = await service.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validationHandler(getAuthorSchema, 'params'),
  validationHandler(updateAuthorSchema, 'body'),
  async (req, res, next)=>{
    try{
      const { id } = req.params;
      const body = req.body;
      const changes = await service.update(id, body);
      res.status(200).json(changes);
    } catch(error){
      next(error)
    }
  }
);

router.delete('/:id',
  validationHandler(getAuthorSchema, 'params'),
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
