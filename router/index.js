const express = require('express');
const userRouter = require('./user.router');
const authorRouter = require('./author.router');
const diaryRouter = require('./diary.router');
const chapterRouter = require('./chapter.router');
const pictureRouter = require('./picture.router');

function routerApp(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/authors', authorRouter);
  router.use('/diaries', diaryRouter);
  router.use('/chapters', chapterRouter);
  router.use('/pictures', pictureRouter);
}

module.exports = routerApp;
