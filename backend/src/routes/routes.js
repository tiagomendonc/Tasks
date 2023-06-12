const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const tasks = require('../controllers/tasks');

// Users routes
router.get('/users/all', users.getAllUsers);
router.post('/users/create', users.createUser);

// Tasks routes
router.get('/tasks/all', tasks.getAllTasks);
router.post('/tasks/create', tasks.createTask);

module.exports = router;