const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.get('/users/all', users.getAllUsers);
router.post('/users/create', users.createUser);

module.exports = router;