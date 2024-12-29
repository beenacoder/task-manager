import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { FaSpinner } from 'react-icons/fa'; // Ícono de carga

const TaskForm = () => {
  const { createTask, loading  } = useTasks();
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error && name === 'title') {
      setError(''); // Limpiar error al corregir el título
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('El título es obligatorio.');
      return;
    }
    createTask(formData);
    setFormData({ title: '', description: '' });

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-950 p-4 rounded shadow-md max-w-lg mx-auto mb-6"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block text-white font-bold mb-2">
          Título
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
            error ? 'border-red-500 focus:ring-red-300' : 'focus:ring-blue-300'
          }`}
          placeholder="Título de la tarea"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white font-bold mb-2">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Descripción (opcional)"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
        disabled={loading}
      >
        {loading && <FaSpinner className="animate-spin" />}
        {loading ? 'Guardando...' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

export default TaskForm;
