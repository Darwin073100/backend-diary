const express = require('express');
const UserService = require('../service/user.service');
const router = express.Router();
const service = new UserService();

router.get('/', async (req, res)=>{
  const users = await service.findAll();
  res.json(users);
});

module.exports = router;
