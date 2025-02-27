import { BottomSheetView } from "@gorhom/bottom-sheet";
import DatePickerModal from "./datePicker";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import SelectedCategory from "./selectedCategory";
import { Category, deleteTask, editTask, Task } from "@/src/redux/features/slice/tasksSlice";
import { useEffect, useState } from "react";
import StatusLabel from "./statusLabels";
import { saveTasks } from "@/src/services/tasksHandler";
import { useAppDispatch } from "@/src/hocks/useAppDispatch";

const EditTask = ({
    selectedTask,
    handleSelectedCategory,
    selectedCategory,
    handelCloseEdit
} : {
    selectedTask: Task
    handleSelectedCategory: () => void
    selectedCategory: Category | null
    handelCloseEdit: () => void
}) => {
    const [task, setTask] = useState(selectedTask);
    const [category, setCategory] = useState<Category | null>();
        const dispatch = useAppDispatch();

    // Definición de estados
    const status = ['Pendiente', 'En progreso', 'Completada', 'Cancelada'] as const;

    useEffect(() => {
        setCategory(selectedTask.category);
        setTask(selectedTask);
    }, [selectedTask]);
    useEffect(() => {
        setCategory(selectedCategory || null);
    }, [selectedCategory]);


    const handelEditTask = () => {
        task.category = selectedCategory || "Otros";
        dispatch(editTask(task));
        dispatch(saveTasks());
        handelCloseEdit();
    }

    const handelDeleteTask = () => {
        dispatch(deleteTask(task.id));
       dispatch(saveTasks());
        handelCloseEdit();
    }

    return(
    <BottomSheetView style={{flex: 1, paddingHorizontal: 20, alignContent: 'center'}}>
    
            <View style={{flex: 1}}>
            <Text className="font-semibold text-xl mb-4">Status</Text>
                <View className=' flex flex-row gap-4 flex-wrap w-full mb-4'>
                {
                status.map((status, index) => (
                 <TouchableOpacity 
                 key={index}
                 onPress={() => {setTask({...task, status: status})}}>
                      <StatusLabel key={index} status={status} isSelected={task.status === status} />
                 </TouchableOpacity>
                ))
              }
              </View>
              
              <Text className="font-semibold text-xl">Título</Text>
              <TextInput 
              defaultValue={selectedTask.title}
              onChangeText={(text) => setTask({...task, title: text})}
              placeholder='Task Name' className='w-full border p-4 rounded-2xl border-gray-300 mt-4 mb-4' />
              
              <Text className="font-semibold text-xl mb-4">Categoria</Text>
              <SelectedCategory category={category|| task.category} handleCategoryPress={()=>{
                handleSelectedCategory()
              }} />
             
             <Text className="font-semibold text-xl">Fecha</Text>
              <DatePickerModal value={selectedTask.date} handleDateChange={(date) => setTask({...task, date: date})} />
              
              <Text className="font-semibold text-xl">Descripción</Text>
              <TextInput 
              defaultValue={selectedTask.description}
              placeholder='Task Description' className='w-full border p-4 rounded-2xl border-gray-300 mt-4' />
                <TouchableOpacity 
                          onPress={() => {
                            handelEditTask();
                          }}
                          className=' bg-blue-600 py-4 mt-10 rounded-2xl'>
                              <Text className='text-white text-center text-lg font-semibold'>Guardar</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                          onPress={() => {
                            handelDeleteTask();
                          }}
                          className=' border border-red-600  py-4 mt-4 rounded-2xl'>
                              <Text className='text-red-600 text-center text-lg font-semibold'>Eliminar</Text>
                          </TouchableOpacity>
            </View>
</BottomSheetView>)
}

export default EditTask