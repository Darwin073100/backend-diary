const express = require('express');
const userRouter = require('./user.router');

function routerApp(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
}

module.exports = routerApp;
