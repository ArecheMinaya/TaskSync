import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {  ChevronLeft, CirclePlus } from 'lucide-react-native';
import { RootState } from '@/src/redux/store';
import { useSelector } from 'react-redux';
import { addTask, Category, status, Task } from '@/src/redux/features/slice/tasksSlice';
import { loadTasks, saveTasks } from '@/src/services/tasksHandler';
import { useAppDispatch } from '@/src/hocks/useAppDispatch';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import TaskList from '@/components/ui/taskList';
import CarouselCalendar from '@/components/ui/carouselCalendar';
import SlectedCategorySheet from '@/components/ui/selectedCategoryShet';
import EditTask from '@/components/ui/editTaskModal';
import AddTask from '@/components/ui/addTaskModal';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { SafeAreaView } from "react-native-safe-area-context";
import { signOutUser } from '@/src/redux/features/slice/authSlice';


export default function HomeScreen() {

    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useAppDispatch();
    const [selectedTask, setSelectedTask] = useState<{ id: string; title: string; description: string; category: Category; status: status; date: string; } | null>(null);
    const [filteredTasks, setFilteredTasks] = useState(tasks.filter(task => task.date === format(new Date(),'dd MMMM yyyy', { locale: es })));
    const [selectedDate, setSelectedDate] = useState(format(new Date(),'dd MMMM yyyy', { locale: es }));
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const snapPoints = useMemo(() => [750, 550], []);

    const sheetRef = useRef<BottomSheet>(null);
    const cartegoryShetRef = useRef<BottomSheet>(null);
    const addTaskSheetRef = useRef<BottomSheet>(null);
   
    const handelTaskPress = useCallback(({ id, date, title, description, status, category}: {
        id: string;
        date: string;
        title: string;
        description: string;
        status: status;
        category: Category;
     }) => {
        setSelectedTask({ id, date, title, description, status, category });
        sheetRef.current?.snapToIndex(0);
      }, []);
      const handelCloseEdit = ()=> {
        sheetRef.current?.close();
      }
    
    useEffect(() => {
        dispatch(loadTasks());
        
      }, [dispatch]);
    
      useEffect(() => {
      dispatch(saveTasks());
      const filteredTasks = tasks.filter(task => task.date === selectedDate)
      setFilteredTasks(filteredTasks);
      }, [tasks, dispatch]);
    

  const handleCategoryPress = ()=> {
    cartegoryShetRef.current?.snapToIndex(0);
  }

  const handleSelectedCategory = (category: Category) => {
    setSelectedCategory(category);

    cartegoryShetRef.current?.close();
  };

 const handleAddTask = () => {
    addTaskSheetRef.current?.snapToIndex(1);
  }

const handleCloseAddTask = () => {
    addTaskSheetRef.current?.close();
  }



  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.date === format(new Date(),'dd/MM/yyyy', { locale: es }))
    setFilteredTasks(filteredTasks);
  }, [tasks]);

  return (
    <SafeAreaView  edges={["top"]}   className='flex-1' style={{ backgroundColor: 'white' }}   >
      <GestureHandlerRootView  className='flex-1'>
      <View className='flex-row justify-between items-center mt-5 px-[20]'>
          <TouchableOpacity 
          onPress={() => {
            dispatch(signOutUser());
          }}
          className='flex-row gap-x-2 items-center'>
              <ChevronLeft size={26} color={'#7F7C96'} strokeWidth={1.5} />
              <Text className='text-xl text-gray-500'>Salir</Text>
          </TouchableOpacity>
           <Text className='text-xl font-bold text-blue-600'>TaskStnc</Text>
         </View>
       <View className='px-[20] mt-4'>

          <Text className='text-2xl font-semibold mt-2 mb-6'>{selectedDate}</Text>
       </View>
         <CarouselCalendar handleFilteredTasksByDay={
            (date: Date) => {
                const filteredTasks = tasks.filter(task => task.date === format(date,'dd/MM/yyyy', { locale: es }))
                setFilteredTasks(filteredTasks)
                setSelectedDate(format(date,'dd MMMM yyyy', { locale: es })); 
            }
         } />
         <View className='flex-row justify-between items-center mt-4 px-[20]'>
          <TouchableOpacity className='flex-row gap-x-2 items-center'
          onPress={() => {handleAddTask()}}
          >
              <Text className='text-lg font-semibold'>Agregar Tarea</Text>
              <CirclePlus size={22} color={'#A5DD9B'} strokeWidth={3} />
          </TouchableOpacity>
          
        </View>
         <TaskList filteredTasks={filteredTasks} handelTaskPress={handelTaskPress}  />
            {/* */}
         <BottomSheet
            index={-1}
            ref={sheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}
        > 
        {
            selectedTask && ( <EditTask selectedTask={selectedTask} handleSelectedCategory={handleCategoryPress} selectedCategory={selectedCategory} handelCloseEdit={handelCloseEdit} />)
        }
        </BottomSheet>

        <BottomSheet
            index={-1}
            ref={addTaskSheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            enablePanDownToClose={true}  
        >
          <AddTask handleSelectedCategory={handleCategoryPress} selectedCategory={selectedCategory || "Otros"} handleCloseAddTask={handleCloseAddTask} />
        </BottomSheet>

        <BottomSheet
            index={-1}
            ref={cartegoryShetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={true}
            enablePanDownToClose={true}        
        >
         <SlectedCategorySheet handleSelectedCategory={handleSelectedCategory}/>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
