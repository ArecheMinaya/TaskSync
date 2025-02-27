import store, { RootState } from '@/src/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Category = 'Trabajo' | 'Personal' | 'Hogar' | 'Estudios' | 'Compras' | 'Salud' | 'Deporte' | 'Viajes' | 'Otros';
export type status = 'Pendiente' | 'En progreso' | 'Completada' | 'Cancelada';

export interface Task {
  id: string;
  date: string;
  title: string;
  description: string;
  status: status;
  category: Category;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setTasks } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export type AppDispatch = typeof store.dispatch;

export default tasksSlice.reducer;
