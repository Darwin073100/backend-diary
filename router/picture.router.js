const express = require('express');
const router = express.Router();
const multer = require('multer');
const mimeTypes = require('mime-types');
const fs = require('fs');
const uploadsPath = require('../uploads/path.uploads');

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, res, cb) =>{
    cb("", Date.now() + "." + mimeTypes.extension(res.mimetype));
  }
});

const upload = multer({
  storage
});

router.get(`/:name`, (req, res) => {
  const { name } = req.params;
  res.sendFile(uploadsPath + "/" + name);
});

router.post('/', upload.single("avatar"), (req, res) => {
  res.send({
    message: "Correct",
  });
});

router.delete(`/:name`, (req, res) => {
  const { name } = req.params;
  fs.unlink(uploadsPath + "/" + name, (r) => {
    res.send({ message: r });
  });
});

module.exports = router;
