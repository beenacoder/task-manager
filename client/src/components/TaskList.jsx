import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaTrashAlt, FaEdit, FaSave } from 'react-icons/fa';
import { MdOutlineDoneAll, MdOutlineDone } from "react-icons/md";
import { useTasks } from '../hooks/useTasks';
import TaskFilter from './TaskFilters';
import TaskForm from './TaskForm';
import Header from './Header';

const TaskList = () => {
  const { tasks, modifyTask, removeTask } = useTasks();
  const [filter, setFilter] = useState('all'); // Estado para el filtro
  const [editingTask, setEditingTask] = useState(null); // Estado para la tarea que se está editando
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const { fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks(); // Carga inicial de tareas
  }, [fetchTasks]);

  // Función para manejar el cambio de filtro
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtrar las tareas según el estado del filtro
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // Mostrar todas las tareas si el filtro es 'all'
  });

  // Función para alternar el estado de completado de una tarea
  const toggleCompleted = (task) => {
    modifyTask(task._id, { completed: !task.completed });
  };

  // Función para comenzar a editar una tarea
  const startEditing = (task) => {
    setEditingTask(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
  };

  // Función para guardar la tarea editada
  const saveEditedTask = () => {
    modifyTask(editingTask._id, { title: editedTitle, description: editedDescription });
    setEditingTask(null); // Cerrar el formulario de edición
  };

  // Función para cancelar la edición
  const cancelEditing = () => {
    setEditingTask(null); // Cerrar el formulario de edición sin guardar
  };

  return (
    <div className="space-y-4">
      <TaskForm />
      {/* Controles de Filtro */}
      <TaskFilter filter={filter} onFilterChange={handleFilterChange} />

      {/* Lista de Tareas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className={`p-4 border rounded shadow-lg flex flex-col justify-between transition-transform duration-200 hover:shadow-2xl hover:-translate-y-2 ${task.completed ? 'bg-green-200' : 'bg-white'
              }`}
          >
            <div>
              {editingTask && editingTask._id === task._id ? (
                // Mostrar formulario de edición si estamos editando esta tarea
                <div>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                    placeholder="Nuevo título"
                  />
                  <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="w-full mb-2 p-2 border border-gray-300 rounded-md"
                    placeholder="Nueva descripción"
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={saveEditedTask}
                      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all shadow hover:shadow-md"
                    >
                      <FaSave className="text-lg" /> Guardar
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="flex items-center gap-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-all shadow hover:shadow-md"
                    >
                      <FaTimes className="text-lg" /> Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                // Mostrar la tarea con las opciones de completar, editar y eliminar
                <div>
                  <h3 className={`text-lg font-bold ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500">{task.description || 'Sin descripción'}</p>
                  <p className="text-xs text-gray-400 mt-2">Creada el: {new Date(task.createdAt).toLocaleDateString()}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 items-center mt-4">
              <button
                onClick={() => toggleCompleted(task)}
                className={`px-4 py-2 rounded text-white ${task.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'
                  }`}
              >
                {task.completed ? <MdOutlineDoneAll /> : <MdOutlineDone />}
              </button>
              <button
                onClick={() => startEditing(task)}
                className="px-4 py-2 rounded bg-rose-900 hover:bg-rose-600 text-white"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => removeTask(task._id)}
                className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;



