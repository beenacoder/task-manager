import React, { useEffect } from 'react';
import { useTasks } from './hooks/useTasks';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProtectedRoute from './utils/ProtectedRoute';
import AuthForm from './pages/AuthForm';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">Gestión de Tareas</h1>
          <Routes>
            <Route path='/login' element={<AuthForm />}/>
            <Route path='/tasks' element={
              <ProtectedRoute>
                <TaskList />
              </ProtectedRoute>}/>
              <Route path='/' element={<AuthForm />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
