const express = require('express');
const userRouter = require('./user.router');
const authorRouter = require('./author.router');

function routerApp(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/authors', authorRouter);
}

module.exports = routerApp;
