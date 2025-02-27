// src/store/persistMiddleware.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Middleware } from '@reduxjs/toolkit';
import { setTasks } from '../redux/features/slice/tasksSlice';

const persistMiddleware: Middleware = store => next => async action => {
  next(action);

  if (setTasks.match(action)) {
    const state = store.getState();
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(state.tasks.tasks));
    } catch (e) {
      console.error('Error al guardar en AsyncStorage', e);
    }
  }
};

export const loadState = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    return {
      tasks: tasks ? JSON.parse(tasks) : undefined,
    };
  } catch (e) {
    console.error('Error al cargar desde AsyncStorage', e);
    return {};
  }
};
