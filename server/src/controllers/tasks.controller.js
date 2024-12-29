const Task = require('../models/Task');
const CustomError = require('../utils/customError');

// Crear una nueva tarea
const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      throw new CustomError(400, 'El título es obligatorio');
    }
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    next(new CustomError(500, 'Error al crear la tarea'));
  }
};

// Obtener todas las tareas
const getTasks = async (req, res, next) => {
  try {
    const { completed } = req.query;
    const filter = completed ? { completed: completed === 'true' } : {};
    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (error) {
    next(new CustomError(500, 'Error al obtener las tareas'));
  }
};

// Obtener una tarea por ID
const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      throw new CustomError(404, 'Esta tarea no existe');
    }
    res.status(200).json(task);
  } catch (error) {
    next(new CustomError(500, 'Error al obtener la tarea'));
  }
};

// Actualizar una tarea
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    if (!task) {
      throw new CustomError(404, 'La tarea no fue encontrada');
    }
    res.status(200).json(task);
  } catch (error) {
    next(new CustomError(500, 'Error al actualizar la tarea'));
  }
};

// Eliminar una tarea
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      throw new CustomError(404, 'La tarea no fue encontrada');
    }
    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    next(new CustomError(500, 'Error al eliminar la tarea'));
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
