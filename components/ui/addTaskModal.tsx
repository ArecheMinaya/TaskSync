import { BottomSheetView } from "@gorhom/bottom-sheet";
import DatePickerModal from "./datePicker";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import SelectedCategory from "./selectedCategory";
import StatusLabel from "./statusLabels";
import { useEffect, useState } from "react";
import { addTask, Category, Task } from "@/src/redux/features/slice/tasksSlice";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useAppDispatch } from "@/src/hocks/useAppDispatch";
import { saveTasks } from "@/src/services/tasksHandler";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const AddTask = ({ handleSelectedCategory,  selectedCategory, handleCloseAddTask} : {handleSelectedCategory: () => void;  selectedCategory : Category, handleCloseAddTask: () => void}) => {
      const dispatch = useAppDispatch();
   
    const [task, setTask] = useState<Task>({
        id: "",
        title: "",
        description: "",
        category: "Otros",
        date: `${format(new Date(),'dd/MM/yyyy', { locale: es })}`,
        status: "Pendiente"
        
    });
    const [date, setDate] = useState(`${format(new Date(),'dd/MM/yyyy', { locale: es })}`,);

    const handleSubmit = (task: Task ) => {
        task.id = uuidv4();
        task.date = date;
        task.category = selectedCategory || "Otros";
        dispatch(addTask(task));
         dispatch(saveTasks());
         setTask({
            id: "",
            title: "",
            description: "",
            category: "Otros",
            date: `${format(new Date(),'dd/MM/yyyy', { locale: es })}`,
            status: "Pendiente"
         })
        handleCloseAddTask();
    };

   
    return(
    <BottomSheetView style={{flex: 1, paddingHorizontal: 20, alignContent: 'center'}}>
            <Formik 
            
                validationSchema={validationSchema}
                validateOnChange={false} // Desactiva la validación al cambiar
                validateOnBlur={false}   // Desactiva la validación al desenfocar
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    values.category = selectedCategory || "Otros";
                    handleSubmit(values);
                    setSubmitting(false);
                    resetForm();
                }}
             initialValues={task}>
                 {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                   <View className="flex-1">
                     <Text className=' font-semibold text-xl' >Titulo</Text>
                    <TextInput
                        placeholder="Titulo de la tarea"
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                        className='w-full border p-4 rounded-2xl border-gray-300 mt-4 mb-2'
                    />
                    {errors.title && (
                    <Text style={{ color: 'red' }}>{errors.title}</Text>
                    )}
                     <Text className=' font-semibold text-xl mb-4 mt-2'>Categories</Text>
              <SelectedCategory category={selectedCategory || "Otros"} handleCategoryPress={()=>{
                handleSelectedCategory()
              }} />
                     <Text className="font-semibold text-xl mt-2">Date</Text>
                    <DatePickerModal value={task.date} handleDateChange={(date: string) => {
                        setDate(date)}} />
                    <Text className="font-semibold text-xl">Descripcion</Text>
                <TextInput 
                    placeholder='Descripcion de la tarea' 
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    className='w-full border p-4 rounded-2xl border-gray-300 mt-4 mb-2' />
                    {errors.title && (
                    <Text style={{ color: 'red' }}>{errors.description}</Text>
                    )}
                    
                    <TouchableOpacity 
                          onPress={() => {
                              handleSubmit();
                          }}
                          className=' bg-blue-600 py-4 mt-10 rounded-2xl'>
                              <Text className='text-white text-center text-lg font-semibold'>Guardar</Text>
                          </TouchableOpacity>
                   </View>   
                 )}
            </Formik>
</BottomSheetView>)
}

export default AddTask




// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('El titulo es obligatorio'),
  date: Yup.string()
    .required('La fecha es obligatoria'),
  description: Yup.string()
    .required('La descripcion es obligatoria'),
});
