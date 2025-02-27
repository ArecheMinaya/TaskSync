import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/slice/tasksSlice';
import authReducer from './features/slice/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
