const express = require('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types');
const fs = require('fs');
const uploadsPath = require('../uploads/path.uploads');
const PictureService = require('../service/picture.service');

const service = new PictureService();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: async (req, res, cb) =>{
    try {
      const fileName = Date.now();
      cb("", fileName + "." + mimeTypes.extension(res.mimetype));
      await service.create({
        name: fileName + "." + mimeTypes.extension(res.mimetype)
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const upload = multer({
  storage
});

router.get('/', async (req, res, next)=>{
  try {
    const images = await service.findAll();
    res.json(images);
  } catch (error) {
    next();
  }
});

router.get(`/:name`, async(req, res, next) => {
  try {
    const { name } = req.params;
    const picture = await service.findByName(name);
    res.sendFile(uploadsPath + "/" + picture.name);
  } catch (error) {
    next(error)
  }
});

router.post('/', upload.single("avatar"), (req, res) => {
  res.send({
    message: "Correct",
  });
});

router.delete(`/:name`, async(req, res, next) => {
  try {
    const { name } = req.params;
    await service.deleteByName(name);
    fs.unlink(uploadsPath + "/" + name, (r) => {
      res.send({ message: r });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
