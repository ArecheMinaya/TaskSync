




// import React, { useState, useRef } from 'react';
// import {
//   StyleSheet,
//   Dimensions,
//   TouchableWithoutFeedback,
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import moment from 'moment';
// import Swiper from 'react-native-swiper';
import { Link } from 'expo-router';
import { Lock, User2Icon, ChevronLeft } from 'lucide-react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { format } from 'date-fns';
// import { es } from 'date-fns/locale';

import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Switch } from "react-native";

// const { width } = Dimensions.get('window');

// export default function HomeScreen() {
//   const swiper = useRef();
//   const contentSwiper = useRef();
  
//   const today = moment();
//   const startOfYear = moment().startOf('year');
//   const endOfYear = moment().endOf('year');
  
//   const [week, setWeek] = useState(today.diff(startOfYear, 'weeks'));
//   const [value, setValue] = useState(today.toDate());

//   /**
//    * Create an array of weekdays ensuring it covers the full year.
//    */
//   const weeks = React.useMemo(() => {
//     return Array.from({ length: moment(endOfYear).diff(startOfYear, 'weeks') + 1 }, (_, wIndex) => {
//       const start = moment(startOfYear).add(wIndex, 'weeks').startOf('week');
//       return Array.from({ length: 7 }).map((_, index) => {
//         const date = moment(start).add(index, 'days');
//         return {
//           weekday: date.format('ddd'),
//           date: date.toDate(),
//         };
//       });
//     });
//   }, []);

//   /**
//    * Create an array of days for yesterday, today, and tomorrow.
//    */
//   const days = React.useMemo(() => {
//     return [
//       moment(value).subtract(1, 'day').toDate(),
//       value,
//       moment(value).add(1, 'day').toDate(),
//     ];
//   }, [value]);

//   return (
//     <SafeAreaView className='flex-1' style={{ backgroundColor: 'white'}} >
//       <View  className='flex-1'>
//        <View className='px-[20]'>
//           <Text className='text-xl mt-6 text-gray-400' >Today</Text>
//           <Text className='text-2xl font-semibold mt-2 mb-6'>{today.format('dddd, D MMM')}</Text>
//        </View>
//          <View className='h-[80] w-full'>
//          <Swiper
//             index={week}
//             loop={false}
//             showsPagination={false}
             
//             onIndexChanged={ind => {
//               const nextWeekStart = moment(startOfYear).add(ind, 'weeks').startOf('week');
//               if (nextWeekStart.isBefore(startOfYear) || nextWeekStart.isAfter(endOfYear)) {
//                 return;
//               }
//               setWeek(ind);
//             }}>
//             {weeks.map((dates, index) => (
//               <View style={styles.itemRow} key={index}>
//                 {dates.map((item, dateIndex) => {
//                   const isActive = value.toDateString() === item.date.toDateString();
//                   return (
//                     <TouchableWithoutFeedback key={dateIndex} onPress={() => setValue(item.date)}>
//                       <View className='text-xs flex-col gap-y-4 items-center'>
//                         <Text className='text-gray-500' >{item.weekday}</Text>
//                         {
//                           isActive ? (
//                               <View className=' bg-blue-600 rounded-full w-9 h-9 flex-col items-center justify-center'>
//                                 <Text className='text-xl text-white' >{item.date.getDate()}</Text>
//                               </View>
//                           ) : (
//                             <Text className='text-xl' >{item.date.getDate()}</Text>
//                           )
//                         }
//                       </View>
//                     </TouchableWithoutFeedback>
//                   );
//                 })}
//               </View>
//             ))}
//           </Swiper>
//          </View>

//          <View className='flex-row justify-between items-center mt-10 px-[20]'>
//           <View className='flex-row gap-x-2 items-center'>
//               <Text className='text-lg font-semibold'>Add Task</Text>
//               <CirclePlus size={22} color={'#A5DD9B'} strokeWidth={3} />
//           </View>
//             <Text>All Tasks</Text>
//         </View>

//         <FlatList
//           className='mt-4 px-[20]'
//             data={[1, 2, 3, 4, 5]}
//             renderItem={({ item }) => (
//               <View className='flex-row justify-between items-center drop-shadow-md gap-x-4 bg-white p-4 rounded-2xl mt-4 shadow-md shadow-gray-200 '>
//                 <SquareCheckBig size={26} color={'#e0e0e0'} strokeWidth={1.5} />
//                 <View className='flex-1'>
//                   <Text className='text-lg font-semibold my-3' >Titulo de mi Task</Text>
//                   <ProgressBar/>
//                 </View>
//                 <ChevronRight size={26} color={'black'} strokeWidth={2} />
//               </View>
//             )}/>
        
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     padding: 16,
//     backgroundColor: '#111',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   picker: {
//     marginTop: 10,
//     height: 100,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   item: {
//     width: 40,
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   itemWeekday: {
//     fontSize: 12,
//     color: '#555',
//   },
//   itemDate: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#222',
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   placeholder: {
//     flex: 1,
//     backgroundColor: '#ddd',
//     borderRadius: 10,
//     marginTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   placeholderInset: {
//     width: '80%',
//     height: '80%',
//     backgroundColor: '#bbb',
//     borderRadius: 8,
//   },
//   footer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#111',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// const DatePickerModal = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [date, setDate] = useState('');

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (selectedDate : Date) => {
//     const currentDate = selectedDate || new Date();
//     hideDatePicker();
//     const formattedDate = format(currentDate, "d 'de' MMMM 'de' yyyy", { locale: es });
//     setDate(formattedDate);
//   };

//   return (
//     <View>
//       <TextInput
//         value={date}
//         placeholder="Selecciona una fecha"
//         readOnly={true}
//         onPress={showDatePicker}
//       />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         minimumDate={new Date()}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//         locale="es-ES" // Configura el idioma español
//         confirmTextIOS="Confirmar" // Texto del botón de confirmación en iOS
//         cancelTextIOS="Cancelar" // Texto del botón de cancelación en iOS
//       />
//     </View>
//   );
// };




// import { ChevronLeft } from 'lucide-react-native';
// import { View, Text, StyleSheet, Switch, Touchable, TouchableOpacity, SafeAreaView, FlatList, TextInput } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView className='flex-1' style={{ backgroundColor: 'white'}} >
//       <View className='flex-1 px-[20]'>

//       <View className='flex-row justify-between items-center mt-5'>
//              <ChevronLeft size={26} color={'#7F7C96'} strokeWidth={1.5} />
//              <Text className='text-xl font-semibold'>Create New Task</Text>
//              <ChevronLeft size={26} color={'transparent'} strokeWidth={1.5} />
//         </View>
        
//         <Text>Task Name</Text>
//         <TextInput placeholder='Task Name' className='w-full border p-4 rounded-2xl border-gray-300' />

//         <Text>Category</Text>
//         <TextInput placeholder='Priority' className='w-full' />

//         <Text>Due Date</Text>
//         <TextInput placeholder='Due Date' className='w-full' />

//         <Text> Description</Text>
//         <TextInput placeholder='Description' className='w-full border p-4 rounded-2xl border-gray-300' />

//         <TouchableOpacity className=' bg-blue-600 py-4 mt-10 rounded-2xl'>
//                <Text className='text-white text-center text-lg font-semibold'>LOG IN</Text>
//            </TouchableOpacity>

//       </View>
//     </SafeAreaView>
//   )
// }
// export default function HomeScreen() {
//   return (
//     //  <SafeAreaView className='flex-1' style={{ backgroundColor: '#F5F7F8' }} >
//       <View className='flex-1'  style={{ backgroundColor: '#F5F7F8' }} >
//         <View className='bg-white px-[20] py-8 rounded-b-3xl'>
//         <SafeAreaView >

// <View className='flex-row justify-between items-center mt-5'>
//    <View className='flex-row gap-x-3 items-center'>
//        <Text className='text-md text-gray-500'>jun,20,2020</Text>
//        <CalendarRangeIcon size={22} color={'black'} strokeWidth={1.5} />  
//    </View>
//     <Text className='text-xl font-bold text-blue-600'>TaskStnc</Text>
//    </View>
//      <Text className='text-2xl font-semibold mt-2'>Today</Text>
//      <View className=' flex-row flex-wrap gap-4 items-center mt-4 w-full'>
//      <View className='flex-row bg-blue-400 p-4 rounded-2xl gap-x-2'>
//        <Text className='text-white text-lg font-semibold'>Ongoing</Text>
//        <WaypointsIcon size={22} color={'#fff'} strokeWidth={1.5} />
//      </View>
//      <View className='flex-row bg-orange-400 p-4 rounded-2xl  gap-x-2'>
//        <Text className='text-white text-lg font-semibold'>In proccess</Text>
//        <WaypointsIcon size={22} color={'#fff'} strokeWidth={1.5} />
//      </View>
//      <View className='flex-row bg-green-400 p-4 rounded-2xl gap-x-2'>
//        <Text className='text-white text-lg font-semibold'>Complet</Text>
//        <WaypointsIcon size={22} color={'#fff'} strokeWidth={1.5} />
//      </View>
//      <View className='flex-row bg-red-400 p-4 rounded-2xl gap-x-2'>
//        <Text className='text-white text-lg font-semibold'>cancel</Text>
//        <WaypointsIcon size={22} color={'#fff'} strokeWidth={1.5} />
//      </View>
//      </View>

// </SafeAreaView>
//         </View>
  
// <View className='flex-row justify-between items-center mt-10 px-[20]'>
//   <View className='flex-row gap-x-2 items-center'>
//       <Text className='text-lg font-semibold'>Add Task</Text>
//       <CirclePlus size={22} color={'#A5DD9B'} strokeWidth={3} />
//   </View>
//    <Text>All Tasks</Text>
// </View>
//           <FlatList
//           className='mt-4 px-[20]'
//             data={[1, 2, 3, 4, 5]}
//             renderItem={({ item }) => (
//               <View className='flex-row justify-between items-center drop-shadow-md gap-x-4 bg-white p-4 rounded-2xl mt-4'>
//                 <SquareCheckBig size={26} color={'#e0e0e0'} strokeWidth={1.5} />
//                 <View className='flex-1'>
//                   <Text className='text-lg font-semibold my-3' >Titulo de mi Task</Text>
//                   <ProgressBar/>
//                 </View>
//                 <ChevronRight size={26} color={'black'} strokeWidth={2} />
//               </View>
//             )}/>
//         </View>
//     //  </SafeAreaView>
//   );
// }

// const ProgressBar = ({ progress = 50, height = 10, color = "#FFCF81",}) => {
 

//   return (
//     <View style={[styles2.container, { height }]}> 
//       <View
//         style={[styles2.progress, { width: `${progress}%`, backgroundColor: color, height }]}
//       />
//     </View>
//   );
// };

// const styles2 = StyleSheet.create({
//   container: {
//     width: "100%",
//     backgroundColor: "#F5F7F8",
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   progress: {
//     borderRadius: 5,
//   },
// });

export default function HomeScreen() {
  return (
     <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 justify-center align-center content-center w-full' >
         <Link href="/sign-in" className='text-lg font-semibold text-blue-600'>Sign in</Link>
     </View>
     </SafeAreaView>
  );
}

