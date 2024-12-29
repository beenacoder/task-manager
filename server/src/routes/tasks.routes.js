const express = require('express');
const router = express.Router();
const { check, body, param, query } = require('express-validator');
const { validateTasks } = require('../middlewares/validateTasks');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/tasks.controller');


// Endpoints
router.post('/tasks', 
    body('title').notEmpty().withMessage('El título es obligatorio'), validateTasks, 
    createTask);

router.get('/tasks', 
    query('completed').optional().isBoolean().withMessage('El estado debe ser true o false'), 
    validateTasks,
    getTasks);

router.get('/tasks/:id', 
    param('id').isMongoId().withMessage('El ID debe ser válido'),
    validateTasks,
    getTaskById);

router.put('/tasks/:id', 
    param('id').isMongoId().withMessage('El ID debe ser válido'),
    body('title').optional().notEmpty().withMessage('El título no puede estar vacío'),
    body('completed').optional().isBoolean().withMessage('El estado debe ser true o false'), 
    validateTasks,
    updateTask);


router.delete('/tasks/:id',
    param('id').isMongoId().withMessage('El ID debe ser válido'),
    validateTasks,
    deleteTask);

module.exports = router;


