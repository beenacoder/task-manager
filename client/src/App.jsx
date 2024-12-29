import React, { useEffect } from 'react';
import { useTasks } from './hooks/useTasks';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const { fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks(); // Carga inicial de tareas
  }, [fetchTasks]);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">Gestión de Tareas</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
