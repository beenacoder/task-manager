import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import {setTasks, addTask, deleteTask, updateTask, setLoading, setError,} from '../redux/slices/taskSlice';

export const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  const fetchTasks = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      // Aplica el filtro al endpoint
      const query = filter === 'all' ? '' : `?completed=${filter === 'completed'}`;
      const response = await api.get(`/tasks${query}`,);
      dispatch(setTasks(response.data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const createTask = async (task) => {
    dispatch(setLoading(true));
    try {
      const response = await api.post('/tasks', task);
      dispatch(addTask(response.data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const removeTask = async (id) => {
    dispatch(setLoading(true));
    try {
      await api.delete(`/tasks/${id}`);
      dispatch(deleteTask(id));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const modifyTask = async (id, updates) => {
    dispatch(setLoading(true));
    try {
      const response = await api.put(`/tasks/${id}`, updates);
      dispatch(updateTask(response.data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { tasks, loading, error, filter, setFilter, fetchTasks, createTask, removeTask, modifyTask };
};
