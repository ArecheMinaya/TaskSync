import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppDispatch } from "../redux/store";
import { setTasks, TasksState } from "../redux/features/slice/tasksSlice";

export const loadTasks = () => async (dispatch: AppDispatch) => {
    try {
      const tasksData = await AsyncStorage.getItem('tasks');
      console.log("tasks", tasksData);
      if (tasksData) {
        const tasks = JSON.parse(tasksData);
        console.log("tasks", tasks);
        dispatch(setTasks(tasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };
  
  export const saveTasks = () => async (dispatch: AppDispatch, getState: () => { tasks: TasksState }) => {
    try {
      const { tasks } = getState();
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks.tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };