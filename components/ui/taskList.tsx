import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryIcon from './categoryIcon'
import { ChevronRight } from 'lucide-react-native'
import { Task } from '@/src/redux/features/slice/tasksSlice'
import ProgressBar from './progressBar'

const TaskList = ({filteredTasks, handelTaskPress} : {
    filteredTasks: Task[];
    handelTaskPress: (task: Task) => void;
}) => {
  return (
    <FlatList
    className='mt-4 px-[20]'
      data={filteredTasks}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={
          () => {
            handelTaskPress(item)
          }
        }
        className='flex-row justify-between items-center drop-shadow-md gap-x-4 bg-white p-4 rounded-2xl mt-4 shadow-md shadow-gray-200 '>
          <CategoryIcon category={item.category} />
          <View className='flex-1'>
            <Text className='text-lg font-semibold my-3' >{item.title}</Text>
            <ProgressBar status={item.status} />
          </View>
          <ChevronRight size={26} color={'black'} strokeWidth={2} />
        </TouchableOpacity>
      )}/>
  )
}

export default TaskList